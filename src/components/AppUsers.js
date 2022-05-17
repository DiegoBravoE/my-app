import React from 'react';
import users from '../users.json'
import Users from './Users'

const AppUsers = () => {
    return (
        <div>
             <ul >
           {users.map((user) => (
          <Users user={user}key={user.email}/>
          
        ))}
           </ul> 
        </div>
    );
};

export default AppUsers;