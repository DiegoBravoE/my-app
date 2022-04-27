import React from 'react';



const sobreMi= ({title,item1,item2,item3,background}) => {



    return (
        <div className="card"  id={background} >
<h2>{title}</h2>
  
     <ul> 
     
       <li><b>{item1} </b></li>
       <li><b>{item2}</b> </li>
       <li><b>{item3}</b> </li>
       
     </ul>
        </div>
    );
};

export default sobreMi;