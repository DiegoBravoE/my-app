import React,{useState} from 'react';
import users from '../quoter.json'

const Usuario = () => {
    const randomIndex = Math.floor(Math.random() * users.lenght);
 const [index, setindex]=useState(randomIndex)
     const changeUsers =()=> {
         
        const randomIndex = Math.floor(Math.random() * users.lenght);
     
        setindex (randomIndex );
    }

    
    return (
        <div className="contenedor">
            <h2>  {users[index ].name.title} </h2>
            <h2>  {users[index ].name.first + " " } 
             {users[index].name.last} </h2>  
           
           <img src={users[index ].picture.large } alt="" />
           <button onClick={changeUsers } >Cambiar Usuario</button>
        </div>
    );
};

export default Usuario;