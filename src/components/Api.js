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
            <h1>{user.name?.title +" "}{user.name?.first +" "}{user.name?.last}</h1>
            <img src={user.picture?.large} alt="" />
        </div>
    );
};

export default Api;