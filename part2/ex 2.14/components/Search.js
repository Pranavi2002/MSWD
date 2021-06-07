import React from 'react'
import CountryInfo from './CountryInfo'


const Search = ({ countries, filter, show }) => {
    const filtered = countries.filter(country =>
      country.name.toUpperCase().includes(filter.toUpperCase())
    );
    const listLen = filtered.length;
    console.log(filtered);
    if(filter===''){
          return <div />
    }
    else{

     if (listLen >= 10) {
      return <div>Too many matches, specify another letter(s)</div>;
    }
  
    else if (listLen > 1 && listLen < 10) {
      return filtered.map(country => (
        <div key={country.name}>
          {country.name}
          <button value={country.name} onClick={show}>show</button>
        </div>
      ));
    } 
    else {
      return (
        <div>
          <CountryInfo country={filtered[0]} />
        </div>
      );
    }
}
  };
export default Search
