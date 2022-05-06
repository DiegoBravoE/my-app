import React from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios'
const PokemonApi = () => {

 
    const [pokemon,setPokemon]= useState({});
    const[height,setHeight]= useState(0)
    const[isDecimeter,setIsDecimeter]=useState(true)
    const[weight,setWeight]= useState(0)
    const[isHectogramos,setIsHectogramos]=useState(true)
    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/1`)
        .then(res=>{setPokemon(res.data)
            setHeight(res.data.height)
            setWeight(res.data.weight)
        })   
    },[])
       const changeUnit= () => {
           if(isDecimeter){
               //convertir a metros
               setHeight(height/10)
               setIsDecimeter(false)
       }else{
           //convertir nuevamente a decimetros
           setHeight(height*10)
           setIsDecimeter(true)
       }
    }
       const changeWeight= () => {

        if(isHectogramos){
            //convertir a metros
            setWeight(height/10)
            setIsHectogramos(false)
    }else{
        //convertir nuevamente a decimetros
        setWeight(height*10)
        setIsHectogramos(true)
    }


       }
console.log(pokemon.sprites?.other.dream_world )
    return (
        <div className="contenedor">
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
            <h3>Weight: {weight}{isHectogramos?' Hectogramos':' Kilogramos'}</h3>
          <h3>Height: {height}{ isDecimeter ? ' decimeters':' meters'}</h3>   

            <h3>Type:{pokemon.types?.[0].type.name}</h3>
            <button onClick={changeUnit}>Change Height </button>
            <button onClick={changeWeight}>Change Weight </button>
        </div>
    );
};

export default PokemonApi;