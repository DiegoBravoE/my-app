import React from 'react';

const AboutMe = () => {
    const user={
        nombre:"Diego Bravo",
        Edad:38,
        PeliculaFav:"Interestelar",
        Musica:"Rock"
      }



    return (
        <div className="card" >
            <ul>
                <li><strong>Nombre:</strong>{user.nombre}</li>
                <li><strong>Edad:</strong>{user.Edad} </li>
                <li><strong>Pelicula Favorita:</strong> {user.PeliculaFav}</li>
                <li><strong>Musica:</strong> {user.Musica}</li>
            </ul>
        </div>
    );
};

export default AboutMe;