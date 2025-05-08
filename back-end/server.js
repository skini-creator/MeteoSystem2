const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { PrismaClient } = require('@prisma/client'); // Si vous utilisez Prisma pour d'autres choses
const prisma = new PrismaClient(); // Si vous utilisez Prisma pour d'autres choses
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;
const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;
const OPENWEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const OPENWEATHER_UNITS = 'metric';

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
  res.send('Bienvenue sur l\'API de la météo (via serveur) !');
});

app.get('/api/weather/:city', async (req, res) => {
  const { city } = req.params;

  if (!OPENWEATHER_API_KEY) {
    return res.status(500).json({ message: 'Clé API OpenWeatherMap non configurée côté serveur.' });
  }

  try {
    const openWeatherResponse = await axios.get(OPENWEATHER_BASE_URL, {
      params: {
        q: city,
        appid: OPENWEATHER_API_KEY,
        units: OPENWEATHER_UNITS,
      },
    });
    res.json(openWeatherResponse.data);
  } catch (error) {
    console.error("Erreur lors de la récupération des données météo depuis OpenWeatherMap :", error);
    if (error.response && error.response.status === 404) {
      return res.status(404).json({ message: `Météo non trouvée pour la ville de ${city}` });
    }
    res.status(500).json({ message: 'Erreur serveur lors de la récupération des données météo.' });
  } finally {
    await prisma.$disconnect(); // Si vous utilisez Prisma pour d'autres choses
  }
});

app.listen(port, () => {
  console.log(`Serveur back-end en écoute sur le port ${port}`);
});