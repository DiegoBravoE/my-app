import React from 'react';

const Users = ({user}) => {
    return (
        <div>
            <li className='contenedor'>
          <img src={user.picture?.thumbnail} alt="" /> 
            <p>Nombre:{user.name?.title}  {user.name?.first} {user.name?.last} </p>  
            <p>Phone:{user.phone}</p> 
            <p>Email:{user.email}</p> 
         </li>
        </div>
    );
};

export default Users;