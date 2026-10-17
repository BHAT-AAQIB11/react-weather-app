import { useEffect, useState } from "react";

export default function SearchCurrentLocation({
  findPosition,
  setSearchText,
  setShowSearch,
  setUpdating
}) {
  const [clicked, setClicked] = useState(false);
  function handleClick() {
    setClicked(!clicked);
  }

  /* https://api.openweathermap.org/data/2.5/weather?q=${name},${country}&appid=${key} */
  useEffect(() => {
    if (clicked) {
      setUpdating(true);
      navigator.geolocation.getCurrentPosition((position) => {
        findPosition(position);
      });
      setShowSearch(false);
      setSearchText("");
    }
  }, [clicked]);
  return (
    <li className="search-item">
      <button onClick={handleClick}>
        <h3>Current Loaction</h3>
    </button>
    </li>
  );
}
