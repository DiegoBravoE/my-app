import React from 'react';

const Edad= () => {

  const user={
    nombre:"Diego Bravo",
    Edad:38,
    PeliculaFavorita:"Interestelar",
    Musica:"Rock"
}

    return (
        <div className="card" >
           <ul>
       <li><b> NOMBRE: </b>{user.nombre} </li>
       <li><b> EDAD:</b>{user.Edad} Años</li>
       <li><b>PELICULA :</b>{user.PeliculaFavorita} </li>
       <li><b>MUSICA:</b>{user.Musica} </li>
     </ul>
        </div>
    );
};

export default Edad;