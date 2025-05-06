import React, { useState } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import WeatherCard from '../components/WeatherCard/WeatherCard';
import WeatherService from '../services/WeatherService'; // Importe le service

function Home() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (searchedCity) => {
    setCity(searchedCity);
    setWeatherData(null);
    setError(null);
    setLoading(true);

    try {
      const data = await WeatherService.getWeather(searchedCity); // Appelle le service API
      setWeatherData(data);
      setError(null);
    } catch (err) {
      console.error("Erreur lors de la récupération de la météo :", err);
      setError(err.message); // Affiche le message d'erreur du service
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Application Météo</h1>
      <SearchBar onSearch={handleSearch} />

      {loading && <p>Chargement des données météo...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
}

export default Home;