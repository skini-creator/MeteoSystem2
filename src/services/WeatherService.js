import axios from 'axios';

const API_KEY = '2ae4f2a6023354aba194080ed84d1e04'; // ⚠️ CLÉ API INCLUSE DIRECTEMENT - NON RECOMMANDÉ POUR LA PRODUCTION
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const UNITS = 'metric';

const WeatherService = {
  async getWeather(city) {
    try {
      const response = await axios.get(API_BASE_URL, {
        params: {
          q: city,
          appid: API_KEY,
          units: UNITS,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des données météo depuis OpenWeatherMap :", error);
      if (error.response && error.response.data && error.response.data.message) {
        throw new Error(`Erreur de l'API météo : ${error.response.data.message}`);
      } else if (error.response && error.response.status === 404) {
        throw new Error(`Météo non trouvée pour la ville de ${city}`);
      } else {
        throw new Error("Impossible de récupérer les données météo depuis le service externe.");
      }
    }
  }
};

export default WeatherService;