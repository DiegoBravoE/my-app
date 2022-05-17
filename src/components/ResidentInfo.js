import axios from 'axios'
import {useState,useEffect} from 'react';

const ResidentInfo = ({url}) => {
const[resident,setResident]=useState({})
useEffect(()=>{
    axios.get(url)
    .then (res=>setResident(res.data))


},[url])
 console.log(resident)
    return (
        <div className="contenedor" >
            { 
            <li className="list" >
                <img src={resident.image} alt="" />     
               <h3>Name:{resident.name} </h3>  <br />
                <h3>Status:{resident.status} </h3><br />
                <h3>Episode:{resident.episode?.length} </h3>
            </li>
            }
        </div>
    );
};

export default ResidentInfo;
