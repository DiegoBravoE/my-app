import axios from 'axios';
import {useState,useEffect} from 'react';


const Countries = () => {
const [countries,setCountries]=useState({})
useEffect(()=>{

    axios.get(`https://restcountries.com/v3.1/all`)
    .then(res=>setCountries(res.data))

},[])
    return (
       
            <ul>
                {
                 countries.map(country =>(
                 <li key={country.cca2}>
                     country{country.name?.official}
                 </li>

                        ))
                       
                        
                }
            </ul>
        
    );
};

export default Countries;