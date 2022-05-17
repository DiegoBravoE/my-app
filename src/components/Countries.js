import axios from 'axios';
import {useState,useEffect} from 'react';
import CountrieItems from './CountrieItems';


const Countries = () => {
const [countries,setCountries]=useState([])
useEffect(()=>{

    axios.get(`https://restcountries.com/v3.1/all`)
    .then(res=>setCountries(res.data))

},[])
console.log(countries)
    return (
       
            <ul >
                {
                 countries.map((country) =>(
                 <CountrieItems country={country}key={country.cca2}/>

                        ))
                       
                        
                }
            </ul>
        
    );
};

export default Countries;