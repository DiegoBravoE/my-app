import React from 'react';
import {useState,useEffect} from 'react'

const ProductForms = ({addProducts,productSelected}) => {
const[name,setName]= useState("")
const[category,setCategory]= useState("")
const[precio,setPrecio]= useState("")
const[isAvailable,setIsAbailable]= useState(false)


useEffect(()=>{
if(productSelected!==null){
    setName(productSelected.name)
    setCategory(productSelected.category)
    setPrecio(productSelected.precio)
    setIsAbailable(productSelected.isAvailable)

}
},[productSelected])

const submit=  e=> {
       e.preventDefault();
       const product={
             id:Date.now(),
            name: name,
            category: category,
            precio: precio,
            isAvailable: isAvailable,

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

              





           </form>
        </div>
    );
};

export default ProductForms;