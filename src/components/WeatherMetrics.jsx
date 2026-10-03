import { useEffect, useRef } from "react";

export default function WeatherMetrics({
  humidity,
  pressure,
  visibility,
  sunset,
  feelsLike,
  windDir,
  windSpeed,
}) {
  const containerRef = useRef(null);
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

    // Cleanup listeners when component unmounts
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);
  return (
    <section ref={containerRef} className="main__weather-metrics">
      <div className="metrics__humidity glassmorphism">
        <h2 className="metrics__h2">Humidity</h2>
        <p>{humidity}%</p>
      </div>
      <div className="metrics__pressure glassmorphism">
        <h2 className="metrics__h2">Pressure</h2>
        <p>{pressure} hPa</p>
      </div>
      <div className="metrics__visibility glassmorphism">
        <h2 className="metrics__h2">Visibility</h2>
        <p>{visibility} m</p>
      </div>
      <div className="metrics__sunset glassmorphism">
        <h2 className="metrics__h2">Sunset</h2>
        <p>{sunset}</p>
      </div>
      <div className="metrics__feels-like glassmorphism">
        <h2 className="metrics__h2">Feels like</h2>
        <p>{feelsLike}°</p>
      </div>
      <div className="metrics__wind glassmorphism">
        <h2 className="metrics__h2">{windDir}</h2>
        <p>{windSpeed} m/s</p>
      </div>
    </section>
  );
}
