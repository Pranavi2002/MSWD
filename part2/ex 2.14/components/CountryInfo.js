import React from "react";
import Weather from './Weather';
const CountryInfo = ({ country }) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <p>Capital {country.capital}</p>
      <p>Population {country.population}</p>
      <h2>Languages</h2>
      <ul>
        {country.languages.map(language => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img
        src={country.flag}
        alt={country.flag}
        style={{ width: "150px" ,height:"100px"}}
      />
       <Weather country={country} />
    </div>
  );
};

export default CountryInfo
