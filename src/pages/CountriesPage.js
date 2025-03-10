import React, { useEffect, useState } from "react";
import axios from "axios";

const CountriesPage = () => {
  const [countries, setCountries] = useState([]);
  const [continent, setContinent] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then(response => setCountries(response.data))
      .catch(error => console.error("Erreur de chargement :", error));
  }, []);

  return (
    <div>
      <h2>Liste des Pays</h2>
      <select onChange={(e) => setContinent(e.target.value)}>
        <option value="">Tous</option>
        <option value="Asia">Asie</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Afrique</option>
      </select>
      <ul>
        {countries
          .filter(country => !continent || country.continents.includes(continent))
          .map(country => (
            <li key={country.cca3}>
              <img src={country.flags.png} alt={country.name.common} width="50" />
              {country.name.common} - {country.capital} ({country.population} habitants)
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CountriesPage;
