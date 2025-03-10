import React from "react";

const CountryList = ({ countries, continent }) => {
  return (
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
  );
};

export default CountryList;
