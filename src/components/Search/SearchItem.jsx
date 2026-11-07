import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function SearchItem({
  name,
  state,
  country,
  lat,
  lon,
  setWeather,
  setSearchText,
  setShowSearch,
  setUpdating,
}) {
  const [clicked, setClicked] = useState(false);
  function handleClick() {
    setClicked(true);
  }
  const navigate = useNavigate();

  async function findSearch(position) {
    const key = import.meta.env.VITE_OPENWEATHER_KEY;
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${position.latitude}&lon=${position.longitude}&appid=${key}`,
      );
      if (!res) {
        throw new Error("Could not fetch data");
      }
      const data = await res.json();
      setWeather({ ...data, name: name });
      if (data && data.name) {
        navigate(`/${encodeURIComponent(name)}`, { replace: true });
      }
    } catch (error) {
      console.error("Network Error", error.message);
    } finally {
      setUpdating(false);
    }
  }

  /* https://api.openweathermap.org/data/2.5/weather?q=${name},${country}&appid=${key} */
  useEffect(() => {
    if (clicked) {
      setUpdating(true);
      let position = { coords: { latitude: lat, longitude: lon } };
      findSearch(position.coords);
      setShowSearch(false);
      setSearchText("");
    }
  }, [clicked]);
  return (
    <li className="search-item glassmorphism">
      <button onClick={handleClick}>
        <h3>{name}</h3>
        <p>
          {state} <span>{country}</span>
        </p>
      </button>
    </li>
  );
}
