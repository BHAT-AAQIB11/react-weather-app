import { useState, useRef, useEffect } from "react";
import Snowfall from "react-snowfall";
import { weatherImageMap } from "../weatherImageMap.js";
import RainAnimation from "./RainAnimation";

export default function WeatherImage({ weatherId }) {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [uiChanges, setUiChnages] = useState([]);
  const prevScrollY = useRef(0);
  function findUidata() {
    setUiChnages(weatherImageMap[weatherId]);
  }
  useEffect(() => {
    findUidata();
    document.body.style.backgroundImage = uiChanges[1]?.background;
    prevScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY.current) {
        setIsScrollingDown(true);
      } else if (currentScrollY < prevScrollY.current) {
        setIsScrollingDown(false);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [uiChanges, weatherId]);

  return (
    <>
      {((weatherId >= 500 && weatherId <= 531 && uiChanges[2]) ||
        (weatherId >= 300 && weatherId <= 321 && uiChanges[2]) ||
        (weatherId >= 200 && weatherId <= 232 && uiChanges[2])) && (
        <RainAnimation numDrops={uiChanges[2]} />
      )}
      {weatherId >= 600 && weatherId <= 622 && (
        <Snowfall
          className="snowfall"
          style={{ zIndex: "1", width: "100vw", height: "100vh" }}
          snowflakeCount={300}
          wind={[-0.8, 1.8]}
          radius={uiChanges[2]?.radius}
          speed={uiChanges[2]?.radius}
        />
      )}
      <div
        className="main__weather-img-container"
        style={{ translate: isScrollingDown ? "0 -50%" : "0" }}
      >
        <img
          style={{
            width: uiChanges[1]?.imageWidth,
            animation: uiChanges[1]?.animation,
            filter: uiChanges[1]?.imageFilter,
          }}
          className="main__weather-img"
          src={uiChanges[0]}
          alt=""
        />
        <img
          style={{
            width: uiChanges[1]?.imageWidth,
            animation: uiChanges[1]?.animation,
            filter: uiChanges[1]?.imageFilter,
          }}
          className="main__weather-img"
          src={uiChanges[0]}
          alt=""
        />
      </div>
    </>
  );
}
