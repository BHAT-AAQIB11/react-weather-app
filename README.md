### React Weather App (Vite)

A clean, modern Single Page Application (SPA) that detects the user's location via the browser and provides real-time weather forecasts using the OpenWeather API. 

## 🔗 Live Demo

Check out the live, fully operational application here: **[Launch Weather App 🚀](https://reactweatherapp-r.netlify.app)**

### 🚀 Features

* **Automated Geolocation:** Automatically prompts the user for geographic coordinates using window.geolocation.
* **Two-Step OpenWeather Integration:** 

  1. Communicates with **OpenWeather's Reverse Geocoding API** to translate raw coordinates into a precise city layout.
  2. Passes the derived latitude and longitude coordinates into the **Current Weather Forecast API** to render real-time weather conditions.
* **Optimized Performance:** Built on top of **Vite** for blazing fast compilation, light bundles, and smooth modular loading.

### 🛠️ Tech Stack

* **Frontend Core:** React, HTML5, CSS3, JavaScript (ES6+)
* **Build Tool:** Vite
* **External Services:** [OpenWeatherMap API](https://openweathermap.org/api)
* **Deployment Platform:** Netlify

### 💻 Local Installation & Setup

Follow these simple steps to configure and boot the application on your local machine: 

### 1. Clone the Repository

```bash

git clone https://github.com/BHAT-AAQIB11/react-weather-app.git
cd react-weather-app
```

### 2. Install Project Dependencies

```bash

npm install
```
### 3. Configure Your Secret Keys

Create a brand new .env file at the exact root level of your project folder: 

```bash

touch .env
```

Open the .env file and define your OpenWeather API Key using Vite's mandatory prefix configuration: 

```text

VITE_OPENWEATHER_KEY=your_actual_openweather_api_key_here
```

*(Note: Do not wrap your API key in quotes, and make sure this file remains ignored by Git to protect your access token).* 

### 4. Boot Up Development Mode

Launch the ultra-fast Vite local development server: 

```bash

npm run dev
```

Open your browser and navigate to the local link provided in your terminal output (usually http://localhost:5173). 

### 📦 Bundling for Production

If you want to review or compile your code exactly how it will execute on live hosting servers (like Netlify), execute the production build pipeline: 

```bash

# 1. Compile, minify, and bundle source files into static assets
npm run build

# 2. Preview the production compilation locally
npm run preview
```

The preview command launches a localized static server pointing strictly to the **dist/** directory, replicating standard deployment settings. 

### 📝 License

This project is licensed under the terms of the MIT License.
