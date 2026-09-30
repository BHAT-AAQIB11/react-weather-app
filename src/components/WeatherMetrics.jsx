export default function WeatherMetrics({
  humidity,
  pressure,
  visibility,
  sunset,
  feelsLike,
  windDir,
  windSpeed,
}) {
  return (
    <section className="main__weather-metrics">
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
