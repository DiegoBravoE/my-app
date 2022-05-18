import React from 'react';
import {useState,useEffect} from 'react';


const FormEjercicio = ({addEjercicio,selectItem}) => {

    const[titulo,setTitulo]= useState("")
    const[descripcion,setDescripcion]= useState("")
    const[isAvailable,setIsAbailable]= useState(false)

    useEffect(()=>{
        if(selectItem!==null){
            setTitulo(selectItem.titulo)
            setDescripcion(selectItem.descripcion)
            setIsAbailable(selectItem.isAvailable)
        
        }
        },[selectItem])
    const submit=  e=> {
        e.preventDefault()
        const ejercicio={
        
             id:Date.now(),
             titulo: titulo,
             descripcion: descripcion,
             isAvailable: isAvailable
 
        }
        
        addEjercicio(ejercicio)
      }

    return (
        <div className='contenedor'>
            <form onSubmit={submit}>


            <div className="input-container">
                <label htmlFor="titulo">Titulo</label>
                <input type="text"  id="titulo"  onChange={(e)=>setTitulo(e.target.value)} value={titulo}/>
                </div>

                <div className="input-container">
                <label htmlFor="descripcion">descripcion</label>
                <input type="text"  id="tdescripcion"  onChange={(e)=>setDescripcion(e.target.value)} value={descripcion}/>
                </div>
                <div className="input-container">

                <label htmlFor="isAvailable">is Available</label>
                <input type="checkbox"  id="isAvailable" checked={isAvailable}
                onChange={(e)=>setIsAbailable(e.target.checked)}  />
                </div>
                <button>Submit</button>


            </form>
        </div>
    );
};

export default FormEjercicio;