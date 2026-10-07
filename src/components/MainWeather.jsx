export default function MainWeather({
  mainTemp,
  mainWeather,
  minTemp,
  maxTemp,
  handleUnitChangeClick,
  children,
}) {
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleUnitChangeClick();
    }
  }
  return (
    <section
      tabIndex={0}
      onClick={handleUnitChangeClick}
      onKeyDown={handleKeyDown}
      className="main__weather glassmorphism"
    >
      <p className="weather__temp-p">{mainTemp}</p>
      {children}
      <p className="weather__description-p">{mainWeather}</p>
      <p className="weather__minmax-temp-p">
        {minTemp.slice(0,-1)}/{maxTemp.slice(0,-1)}
      </p>
    </section>
  );
}
