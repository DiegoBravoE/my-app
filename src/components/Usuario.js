import React,{useState} from 'react';
import users from '../quoter.json'




const colors=["red","green","blue","coral","yellow","aliceblue","goldenrod"]

const Usuario = () => {
    console.log(users)
    const randomIndex = Math.floor(Math.random() * users.length);
 const [index, setindex]=useState(randomIndex)
     const changeUsers =()=> {
         
        const randomIndex = Math.floor(Math.random() * users.length);
     
        setindex (randomIndex);
    }
    const randomcolors = Math.floor(Math.random() * users.length);
     document.body.style =`background:${colors[randomcolors]}`
    
    return (
        <div className="contenedor"style={{color: colors[randomcolors]}} >
            <h2>  {users[index ].name.title} </h2>
            <h2>  {users[index ].name.first + " " } 
             {users[index].name.last} </h2>            
           <img src={users[index ].picture.large } alt="" />
           <div className="datos" >
           <i className="fa-solid fa-envelope"> {users[index].email}</i>
           <i className="fa-solid fa-phone"> {users[index].phone}</i>
           <i className="fa-solid fa-location-pin"> {users[index].location.city}</i>
           </div>
           <button onClick={changeUsers } >Cambiar Usuario</button>
        </div>
    );
};

export default Usuario;