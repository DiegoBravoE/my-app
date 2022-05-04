
import React,{useEffect, useState} from 'react';

const Contador = () => {
    const [counter,setCounter]  = useState(0);

    
    const [isVisible,setIsVisible]  = useState(false);
    

useEffect(()=>{
        
    const colors=["red","green","blue","coral","yellow","aliceblue","goldenrod"]
    const randomcolors = Math.floor(Math.random() * colors.length);
    document.body.style =`background:${colors[randomcolors]}`
        
    },[counter])
    

    return (
        <div className="contenedor" >
            <h2>{counter}</h2>
            <button onClick={()=>setCounter(counter + 1)}   >Incremento</button>
            <button  onClick={()=>setCounter(counter - 1)}     >Decremento</button>
            <input type={isVisible ? "text":"password" }/>
            <button onClick={()=>setIsVisible(!isVisible)}>Mostrar</button>
        </div>
    );
};

export default Contador;