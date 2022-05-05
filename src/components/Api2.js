import axios, { Axios } from 'axios';
import {useState,useEffect} from 'react';
import useApi2 from '../hooks/useApi2.js'  
import React from 'react';

const Api2 = () => {

    useEffect(()=>{

        axios.get(`https://api.emojisworld.fr/v1/random?limit=1`)
        .then(res=>setEmoji(res))
    
    },[])



    
}
  (emoji,setEmoji,changeEmoji )=useApi2()



console.log(emoji.data?.results[0])

    return (
        <div className="contenedor">
            <h1>{emoji.data?.results[0].name}</h1>
            <h1>{emoji.data?.results[0].emoji}</h1>
            <button onClick={changeEmoji}>Cambiar</button>
        </div>
    );
};

export default Api2;