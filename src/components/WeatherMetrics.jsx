import { useEffect, useRef, useState } from "react";
import { handleStoredUnits, pressureUnits, speedUnits } from "../units";

export default function WeatherMetrics({
  humidity,
  pressure,
  visibility,
  sunset,
  feelsLike,
  windDir,
  windSpeed,
  handleUnitChangeClick,
}) {
  const [pressureUnitIndex, setPressureUnitIndex] = useState(
    JSON.parse(localStorage.getItem("metric-units"))?.pressureUnit || 0,
  );

  const [speedUnitIndex, setSpeedUnitIndex] = useState(
    JSON.parse(localStorage.getItem("metric-units"))?.speedUnit || 0,
  );
  const containerRef = useRef(null);

  function UTCToLocal(utc) {
    const date = new Date(utc * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    let returnMinutes = minutes;
    if (minutes.toString().length === 1) {
      returnMinutes = `0${minutes}`;
    }
    return hours + ":" + returnMinutes;
  }

  function windDirection(deg) {
    const directions = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
    ];
    return directions[Math.round(deg / 22.5) % 16];
  }
  function handleClick(arr, setIndexFn, index, unitName) {
    if (index >= arr.length - 1) {
      handleStoredUnits(unitName, 0);
      setIndexFn(0);
      return;
    }
    handleStoredUnits(unitName, index + 1);
    setIndexFn(index + 1);
  }

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      container.scrollTop += e.deltaY;
    };
    let startY = 0;
    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const currentY = e.touches[0].clientY;
      const deltaY = startY - currentY;
      container.scrollTop += deltaY;
      startY = currentY;
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);
  return (
    <section ref={containerRef} className="main__weather-metrics">
      <div tabIndex={0} className="metrics__humidity glassmorphism">
        <h2 className="metrics__h2">Humidity</h2>
        <p>{humidity}%</p>
      </div>
      <div
        tabIndex={0}
        onClick={() =>
          handleClick(
            pressureUnits,
            setPressureUnitIndex,
            pressureUnitIndex,
            "pressureUnit",
          )
        }
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleClick(
              pressureUnits,
              setPressureUnitIndex,
              pressureUnitIndex,
              "pressureUnit",
            );
          }
        }}
        className="metrics__pressure glassmorphism"
      >
        <h2 className="metrics__h2">Pressure</h2>
        <p>{pressureUnits[pressureUnitIndex](pressure)}</p>
      </div>
      <div tabIndex={0} className="metrics__visibility glassmorphism">
        <h2 className="metrics__h2">Visibility</h2>
        <p>{visibility} m</p>
      </div>
      <div tabIndex={0} className="metrics__sunset glassmorphism">
        <h2 className="metrics__h2">Sunset</h2>
        <p>{UTCToLocal(sunset)}</p>
      </div>
      <div
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleUnitChangeClick();
          }
        }}
        onClick={handleUnitChangeClick}
        className="metrics__feels-like glassmorphism"
      >
        <h2 className="metrics__h2">Feels like</h2>
        <p>{feelsLike}</p>
      </div>
      <div
        tabIndex={0}
        onClick={() =>
          handleClick(
            speedUnits,
            setSpeedUnitIndex,
            speedUnitIndex,
            "speedUnit",
          )
        }
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleClick(
              speedUnits,
              setSpeedUnitIndex,
              speedUnitIndex,
              "speedUnit",
            );
          }
        }}
        className="metrics__wind glassmorphism"
      >
        <h2 className="metrics__h2">{windDirection(windDir)}</h2>
        <p>{speedUnits[speedUnitIndex](windSpeed)}</p>
      </div>
    </section>
  );
}
