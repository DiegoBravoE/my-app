import React from 'react';

const CountrieItems = ({country}) => {
    
    return (
        <div>
            <li className="contenedor">
               
            <p> <strong>Country:</strong> {country.name.common}</p>
                
                <img src={country.flags?.png} alt=""  />
                <p><strong>Continente:</strong>{country.continents}</p>
                <p> <strong>Capital:</strong> {country.capital}</p>
                <p><strong>Poblacion:</strong>{country.population}</p>
            
            </li>
        </div>
    );
};

export default CountrieItems;