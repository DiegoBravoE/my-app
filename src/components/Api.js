import axios from 'axios'
import React,{useState,useEffect} from 'react';

const Api = () => {
    const [user,setUser]= useState({})

    useEffect(()=>{

        axios.get('https://randomuser.me/api/')   
        .then(res=>setUser(res.data.results[0]));

    },[])
  
console.log(user)
    return (
        <div className="contenedor">
            <h1>{user.name?.title +" "}</h1>
            <h2>{user.name?.first +" "}{user.name?.last} </h2>
            <h3>Years:{user.dob?.age}</h3>
            <img src={user.picture?.large} alt="" />
            <h4>Email:{user.email}</h4>
            <h3>{user.cell}</h3>

        </div>
    );
};

export default Api;