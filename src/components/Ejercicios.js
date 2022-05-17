import React from 'react';

const Ejercicios = ({ejercicios}) => {
    return (
        <div>
            <ul>

            {
                ejercicios.map(ejercicio=>(

                <li   key ={ejercicio.id}>
                    <h1>{ejercicio.titulo}</h1>
                    <p>{ejercicio.descripcion}</p>
                    <p>Is Available:{ejercicio.isAvailable.toString()}</p>

                </li>
                ))
            }

            </ul>
        </div>
    );
};

export default Ejercicios;