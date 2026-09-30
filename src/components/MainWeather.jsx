export default function MainWeather({mainTemp, mainWeather, minTemp, maxTemp}) {
  return (
    <section className="main__weather glassmorphism">
      <p className="weather__temp-p">
        {mainTemp}°
      </p>
      <p className="weather__description-p">
        {mainWeather}
      </p>
      <p className="weather__minmax-temp-p">
        {minTemp}°/
        {maxTemp}°
      </p>
    </section>
  );
} 
