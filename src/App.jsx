import { useState, useEffect } from "react";
import MainWeather from "./components/MainWeather";
import WeatherMetrics from "./components/WeatherMetrics";
import WeatherImage from "./components/WeatherImage";
import UpdatingStatus from "./components/UpdatingStatus";

export default function App() {
  const [weather, setWeather] = useState(
    JSON.parse(localStorage.getItem("weather-data")),
  );
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState({ state: false, message: "" });

  function UTCToLocal(utc) {
    const date = new Date(utc * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return hours + ":" + minutes;
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

  function toCelsius(kelvin) {
    return (kelvin - 273.15).toFixed();
  }

  function locationDenial(error) {
    setError({ state: true, message: "Allow location access to proceed" });
    setUpdating(false);
    console.error(error);
  }

  async function findPosition(position) {
    const { latitude, longitude } = position.coords;
    const key = import.meta.env.VITE_OPENWEATHER_KEY;
    try {
      const res = await fetch(
        `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=${key}`,
      );
      if (!res) {
        throw new Error("Could not fetch placeData");
      }
      const placeData = await res.json();
      const placeLat = placeData[0].lat;
      const placeLong = placeData[0].lon;
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${placeLat}&lon=${placeLong}&appid=${key}`,
      );
      if (!response) {
        throw new Error("Could not fetch weatherData");
      }
      const data = await response.json();
      localStorage.setItem("weather-data", JSON.stringify(data));
      setWeather(data);
    } catch (error) {
      console.error("Network Error", error.message);
      setError({ state: true, message: "Network Error" });
    } finally {
      setUpdating(false);
    }
  }

  function handleReload() {
    window.location.reload();
  }

  useEffect(() => {
    setUpdating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => findPosition(position),
      () => {
        locationDenial(error);
      },
    );
  }, []);

  if (error.state) {
    return (
      <div className="error-screen">
        <p className="error__reason">{error.message}</p>
        <button onClick={handleReload} className="error__reload" type="button">
          Try again
        </button>
      </div>
    );
  }
  if (!error.state && !weather) {
    return (
      <div className="loading-screen">
        <p className="loading__text">Fetching...</p>
      </div>
    );
  }

  return (
    <>
      <WeatherImage weatherId={weather?.weather[0].id} />
      <main className="main">
        <h2 className="main__city-h1">{weather?.name || "loading"}</h2>
        <div className="weather-container">
          <MainWeather
            mainTemp={toCelsius(weather?.main.temp)}
            mainWeather={weather?.weather[0].description}
            minTemp={toCelsius(weather?.main.temp_min)}
            maxTemp={toCelsius(weather?.main.temp_max)}
          >
            <UpdatingStatus updating={updating} />
          </MainWeather>
          <WeatherMetrics
            humidity={weather?.main.humidity}
            pressure={weather?.main.pressure}
            visibility={weather?.visibility}
            sunset={UTCToLocal(weather?.sys.sunset)}
            feelsLike={toCelsius(weather?.main.feels_like)}
            windDir={windDirection(weather?.wind.deg)}
            windSpeed={weather?.wind.speed}
          />
        </div>
      </main>
    </>
  );
}

/* const [weather, setWeather] = useState(
    "" || JSON.parse(localStorage.getItem("weather-data")),
  ); */

/* https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&forecast_days=3 */

//Hourly forecast
/*  const [data, setData] = useState({
    latitude: 34.059753,
    longitude: 74.8125,
    generationtime_ms: 4.721164703369141,
    utc_offset_seconds: 0,
    timezone: "GMT",
    timezone_abbreviation: "GMT",
    elevation: 1582,
    hourly_units: { time: "iso8601", temperature_2m: "°C" },
    hourly: {
      time: [
        "2026-09-26T00:00",
        "2026-09-26T01:00",
        "2026-09-26T02:00",
        "2026-09-26T03:00",
        "2026-09-26T04:00",
        "2026-09-26T05:00",
        "2026-09-26T06:00",
        "2026-09-26T07:00",
        "2026-09-26T08:00",
        "2026-09-26T09:00",
        "2026-09-26T10:00",
        "2026-09-26T11:00",
        "2026-09-26T12:00",
        "2026-09-26T13:00",
        "2026-09-26T14:00",
        "2026-09-26T15:00",
        "2026-09-26T16:00",
        "2026-09-26T17:00",
        "2026-09-26T18:00",
        "2026-09-26T19:00",
        "2026-09-26T20:00",
        "2026-09-26T21:00",
        "2026-09-26T22:00",
        "2026-09-26T23:00",
        "2026-09-27T00:00",
        "2026-09-27T01:00",
        "2026-09-27T02:00",
        "2026-09-27T03:00",
        "2026-09-27T04:00",
        "2026-09-27T05:00",
        "2026-09-27T06:00",
        "2026-09-27T07:00",
        "2026-09-27T08:00",
        "2026-09-27T09:00",
        "2026-09-27T10:00",
        "2026-09-27T11:00",
        "2026-09-27T12:00",
        "2026-09-27T13:00",
        "2026-09-27T14:00",
        "2026-09-27T15:00",
        "2026-09-27T16:00",
        "2026-09-27T17:00",
        "2026-09-27T18:00",
        "2026-09-27T19:00",
        "2026-09-27T20:00",
        "2026-09-27T21:00",
        "2026-09-27T22:00",
        "2026-09-27T23:00",
        "2026-09-28T00:00",
        "2026-09-28T01:00",
        "2026-09-28T02:00",
        "2026-09-28T03:00",
        "2026-09-28T04:00",
        "2026-09-28T05:00",
        "2026-09-28T06:00",
        "2026-09-28T07:00",
        "2026-09-28T08:00",
        "2026-09-28T09:00",
        "2026-09-28T10:00",
        "2026-09-28T11:00",
        "2026-09-28T12:00",
        "2026-09-28T13:00",
        "2026-09-28T14:00",
        "2026-09-28T15:00",
        "2026-09-28T16:00",
        "2026-09-28T17:00",
        "2026-09-28T18:00",
        "2026-09-28T19:00",
        "2026-09-28T20:00",
        "2026-09-28T21:00",
        "2026-09-28T22:00",
        "2026-09-28T23:00",
      ],
      temperature_2m: [
        13, 11.7, 12.9, 16, 18.6, 21.1, 23, 24.4, 25.3, 25.9, 26.3, 26.1, 25.1,
        23, 20.6, 17.9, 15.9, 14.8, 13.9, 13, 12.4, 11.9, 11.7, 11.6, 11.3,
        11.1, 12.7, 16, 18.8, 21.3, 23.5, 25.2, 26.3, 27, 27.5, 27.3, 25.9,
        22.9, 22.2, 21.2, 19.7, 17.7, 16, 14.8, 13.5, 12.6, 12.4, 12, 12.1,
        11.7, 13.3, 15.9, 18.2, 20.4, 22.8, 24.3, 25.1, 25.5, 25.7, 25.5, 24.6,
        21.3, 20.1, 18.9, 17.4, 15.8, 14.7, 13.9, 13.2, 12.7, 12.3, 12,
      ],
    },
  }); */
