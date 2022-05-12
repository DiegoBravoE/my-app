
import axios from 'axios';
import {useState,useEffect} from 'react';


const Paises = () => {
const [countries,setCountry]=useState({})
useEffect(()=>{

    axios.get(`https://restcountries.com/v3.1/all`)
    .then(res=>setCountry(res.data))

},[])

    return (
        <div>
 <ul>
     {
         countries.map(country=>(
             <li key={country.cca2}>{country.name.official}</li>
         ))
     }
 </ul>
        </div>
    );
};

export default Paises;