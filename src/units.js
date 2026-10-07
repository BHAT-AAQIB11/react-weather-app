export const temperatureUnits = [
  function (kelvin) {
    return `${(kelvin - 273.15).toFixed()} °C`;
  },
  function (kelvin) {
    return `${((kelvin - 273.15) * (9 / 5) + 32).toFixed()} °F`;
  },
];

export const pressureUnits = [
  function (hPa) {
    return `${hPa} hPa`;
  },
  function (hPa) {
    return `${hPa} mbar`;
  },
  function (hPa) {
    return `${(hPa * 0.750062).toFixed(2)} mmHg`;
  },
  function (hPa) {
    return `${(hPa * 0.1).toFixed(2)} kPa`;
  },
  function (hPa) {
    return `${(hPa / 1013.25).toFixed(2)} atm`;
  },
];

export function handleStoredUnits(unitName, unitValue) {
  const storedUnits = JSON.parse(localStorage.getItem("metric-units")) || {};
  storedUnits[unitName] = unitValue;
  localStorage.setItem("metric-units", JSON.stringify(storedUnits));
}


const beaufortTable = [
  {
    bft: 0,
    maxMps: 0.3,
    name: "Calm",
    desc: "Smoke rises vertically. Sea like a mirror.",
  },
  {
    bft: 1,
    maxMps: 1.6,
    name: "Light air",
    desc: "Smoke drift indicates wind direction. Leaves motionless.",
  },
  {
    bft: 2,
    maxMps: 3.4,
    name: "Light breeze",
    desc: "Wind felt on face. Leaves rustle. Vanes moved by wind.",
  },
  {
    bft: 3,
    maxMps: 5.5,
    name: "Gentle breeze",
    desc: "Leaves and small twigs constantly move. Light flags extended.",
  },
  {
    bft: 4,
    maxMps: 8.0,
    name: "Moderate breeze",
    desc: "Dust and loose paper raised. Small branches move.",
  },
  {
    bft: 5,
    maxMps: 10.8,
    name: "Fresh breeze",
    desc: "Small trees in leaf begin to sway. Crested wavelets form on inland waters.",
  },
  {
    bft: 6,
    maxMps: 13.9,
    name: "Strong breeze",
    desc: "Large branches in motion. Whistling heard in telegraph wires. Umbrellas used with difficulty.",
  },
  {
    bft: 7,
    maxMps: 17.2,
    name: "High wind",
    desc: "Whole trees in motion. Effort needed to walk against the wind.",
  },
  {
    bft: 8,
    maxMps: 20.8,
    name: "Gale",
    desc: "Twigs break off trees. Generally progresses impedes.",
  },
  {
    bft: 9,
    maxMps: 24.5,
    name: "Strong gale",
    desc: "Slight structural damage occurs (slate roofs blown off).",
  },
  {
    bft: 10,
    maxMps: 28.5,
    name: "Storm",
    desc: "Seldom experienced inland. Trees uprooted. Considerable structural damage.",
  },
  {
    bft: 11,
    maxMps: 32.7,
    name: "Violent storm",
    desc: "Very rarely experienced. Accompanied by widespread damage.",
  },
];

export const speedUnits = [
  function (meterPerSecond) {
    return `${meterPerSecond.toFixed(2)} m/s`;
  },
  function (meterPerSecond) {
    return `${(meterPerSecond * 3.6).toFixed(2)} km/h`;
  },
  function (meterPerSecond) {
    return `${(meterPerSecond * 2.237).toFixed(2)} mph`;
  },
  function (meterPerSecond) {
    return `${(meterPerSecond * 1.94384).toFixed(2)} kts`;
  },
  function (meterPerSecond) {
    for (const elem of beaufortTable) {
      if (meterPerSecond < elem.maxMps) {
        return `Force ${elem.bft}`;
      }
    }
    return "Force 12";
  },
];
