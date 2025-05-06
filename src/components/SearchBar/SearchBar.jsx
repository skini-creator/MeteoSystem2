import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSearch) {
      onSearch(city); // Appelle la fonction onSearch (handleSearch de Home) avec la ville
    }
    setCity(''); // Réinitialise le champ de saisie après la recherche
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Entrez le nom d'une ville"
        value={city}
        onChange={handleChange}
      />
      <button type="submit">Rechercher</button>
    </form>
  );
}

export default SearchBar;