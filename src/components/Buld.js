import React,{ useState } from 'react';




const [isOn ,setIsOn]=useState(false);

const Buld = () => {

    return (
        <div>
          <div  className="off" style={{background:isOn ? "gray":"yellow"}}></div>
          <button  onClick={() => setIsOn(!isOn)}>on/off</button>  
        </div>

    );
};

export default Buld;