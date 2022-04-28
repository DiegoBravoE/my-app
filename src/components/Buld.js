import React,{ useState } from 'react';

const Buld = () => {

 
    const [isOn ,setIsOn]=useState(false);
    return (
        <div>
           <div className="off" style={{background:isOn ? " gray":"yellow"}}></div>
          <button onClick={()=>setIsOn(!isOn)} >on/off</button>

          <div className="off" style={{background:isOn ? " gray":"yellow"}}></div>
          <button onClick={()=>setIsOn(!isOn)} >on/off</button>

          <div className="off" style={{background:isOn ? " gray":"yellow"}}></div>
          <button onClick={()=>setIsOn(!isOn)} >on/off</button>  
        </div>
    );
};

export default Buld;