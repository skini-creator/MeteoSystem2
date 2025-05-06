import React from 'react';

function WeatherCard({ weatherData }) {
  if (!weatherData) {
    return <p>Aucune donnée météo disponible.</p>;
  }

  const { name, main, weather, wind } = weatherData;
  const temperature = main?.temp;
  const description = weather?.[0]?.description;
  const iconCode = weather?.[0]?.icon;
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
  const windSpeed = wind?.speed;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      {temperature && <p>Température: {temperature}°C</p>}
      {description && <p>Description: {description}</p>}
      {iconCode && <img src={iconUrl} alt={description} />}
      {windSpeed && <p>Vent: {windSpeed} m/s</p>}
      {/* Vous ajouterez ici d'autres informations météo */}
    </div>
  );
}

export default WeatherCard;