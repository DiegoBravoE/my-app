import React from 'react';

const Ejercicios = ({ejercicios}) => {
    return (
        <div>
            <ul>

            {

                ejercicios.map(ejercicio=>(

                <li>
                    <h1>{ejercicio.titulo}</h1>
                    <p>{ejercicio.descripcion}</p>
                   

                </li>


                ))


            }





            </ul>
        </div>
    );
};

export default Ejercicios;