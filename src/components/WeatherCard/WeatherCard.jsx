import React from 'react';
import './WeatherCard.css'; // Importez votre fichier CSS

function WeatherCard({ weatherData }) {
  if (!weatherData) {
    return <div className="weather-card">Pas de données météo disponibles.</div>;
  }

  return (
    <div className="weather-card">
      <div className="location-info">
        <h2 className="city">{weatherData.name}</h2>
      </div>
      <div className="weather-details">
        <div className="temperature-container">
          <span className="temperature">{Math.round(weatherData.main.temp)}°C</span>
        </div>
        <div className="description-container">
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.weather[0].description}
            className="weather-icon"
          />
          <span className="description">{weatherData.weather[0].description}</span>
        </div>
        <div className="additional-info">
          <p>Humidité: {weatherData.main.humidity}%</p>
          <p>Vent: {weatherData.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;