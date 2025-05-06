import React, { useState } from 'react';
import './Home.css'; // Importez votre fichier CSS

function Home({ onSearch }) {
  const [city, setCity] = useState('');

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (city.trim()) {
      onSearch(city); // Fonction pour déclencher la recherche (passée depuis le parent)
    }
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Votre Application Météo</h1>
        <p>Obtenez les prévisions météorologiques rapidement et facilement.</p>
      </header>
      <main className="home-main">
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            placeholder="Entrez le nom d'une ville"
            value={city}
            onChange={handleChange}
            className="search-input"
          />
          <button type="submit" className="search-button">
            Rechercher
          </button>
        </form>
        {/* Vous pourriez ajouter ici des exemples de villes ou d'autres éléments */}
      </main>
      <footer className="home-footer">
        <p>&copy; {new Date().getFullYear()} Votre Application Météo</p>
      </footer>
    </div>
  );
}

export default Home;