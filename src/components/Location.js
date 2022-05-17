import axios from 'axios';
import React ,{useState,useEffect}from 'react';
import ResidentInfo from './ResidentInfo';

const Location = () => {

const [location,setLocation]= useState({})
const [id, setId]= useState("")

useEffect(()=>{
  const random=Math.floor(Math.random()*126 ) +1
   
    axios.get(`https://rickandmortyapi.com/api/location/${random}/`)
    .then((res)=>setLocation(res.data))
},[])

console.log(location);

const searchId = () => {
 
    axios.get(`https://rickandmortyapi.com/api/location/${id}/`)
         .then((res) => setLocation(res.data));
  }

  
    return (
        <div className="navbar">
            
            <h4>Name: {location.name}</h4>        
            <h4> Type: {location.type} <br /> Dimension: {location.dimension}<br /> 
               Population:{location.residents?.length}</h4>
        <div>
        <div    >
            <input type="text" onChange={(e) => setId(e.target.value)} value={id} />
             <button  onClick={searchId}>Buscar</button>

         </div>
             <ul  >
                {location.residents?.map(resident => (
                       
                    <ResidentInfo url={resident}  key={resident.url}  />
                       ))
                }
                
             </ul>
            </div>

        </div>
    );
};

export default Location;