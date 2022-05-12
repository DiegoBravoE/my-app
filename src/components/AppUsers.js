import React from 'react';
import users from '../users.json'


const AppUsers = () => {
    return (
        <div>
             <ul >
           {users.map(user => (
          <li className='contenedor' key={user.id.value}>
          <img src={user.picture.large} alt="" /> 
            <p>Nombre:{user.name.title}  {user.name.first} {user.name.last} </p>  
            <p>Email:{user.email}</p> 
         </li>
          
        ))}
           </ul> 
        </div>
    );
};

export default AppUsers;