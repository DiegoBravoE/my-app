import {useState,useEffect} from 'react';
import axios, { Axios } from 'axios';
import React from 'react';

const Api2 = () => {

    
    const [emoji,setEmoji]= useState({});

    
    useEffect(()=>{
        axios.get(`https://api.emojisworld.fr/v1/random?limit=1`)
        .then(res=>setEmoji(res))
        
    },[])

    const changeEmoji= () => {
        axios.get(`https://api.emojisworld.fr/v1/random?limit=1`)
        .then(res=>setEmoji(res));

    }

return (
        <div className="contenedor">
            <h1>{emoji.data?.results[0].name}</h1>
            <h1>{emoji.data?.results[0].emoji}</h1>
            <button onClick={changeEmoji}>Cambiar</button>
        </div>
    );
};

export default Api2;