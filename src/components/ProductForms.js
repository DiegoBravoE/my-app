import React from 'react';
import {useState} from 'react'

const ProductForms = ({addProducts}) => {
const[name,setName]= useState("")
const[category,setCategory]= useState("")
const[precio,setPrecio]= useState("")
const[isAvailable,setIsAbailable]= useState(false)


const[titulo,setTitulo]= useState("")
const[descripcion,setDescripcion]= useState("")
const[isavailable,setIsabailable]= useState(false)


const submit=  e=> {
       e.preventDefault();
       const product={
             id:Date.now(),
            name: name,
            category: category,
            precio: precio,
            isAvailable: isAvailable,

            titulo:titulo,
            descripcion:descripcion,
            isavailable: isavailable

       }
       addProducts(product);

     }


    return (
        <div className="contenedor">
           <form onSubmit={submit}>
               <div className="input-container">
                <label htmlFor="name">name</label>
                <input type="text"  id="name"  onChange={(e)=>setName(e.target.value)} value={name}/>
                </div>

                <div className="input-container">
                <label htmlFor="category">categoria</label>
                <input type="text"  id="category" onChange={(e)=>setCategory(e.target.value)} value={category}/>
                </div>

                <div className="input-container">
                <label htmlFor="precio">precio</label>
                <input type="text"  id="precio"onChange={(e)=>setPrecio(e.target.value)} value={precio}/>
                </div>

                <div className="input-container">
                <label htmlFor="is-available">is-available</label>
                <input type="checkbox"  id="is-available" checked={isAvailable}
                onChange={(e)=>setIsAbailable(e.target.checked)}  />
                </div>
                <button >Submit</button>

                <div className="input-container">
                <label htmlFor="titulo">Titulo</label>
                <input type="text"  id="titulo"  onChange={(e)=>setTitulo(e.target.value)} value={titulo}/>
                </div>

                <div className="input-container">
                <label htmlFor="descripcion">descripcion</label>
                <input type="text"  id="tdescripcion"  onChange={(e)=>setDescripcion(e.target.value)} value={descripcion}/>
                </div>
                <div className="input-container">

                <label htmlFor="isavailable">isavailable</label>
                <input type="checkbox"  id="isavailable" checked={isavailable}
                onChange={(e)=>setIsabailable(e.target.checked)}  />
                </div>
                <button>Submit</button>





           </form>
        </div>
    );
};

export default ProductForms;