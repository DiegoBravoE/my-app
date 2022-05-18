import React from 'react';

const Ejercicios = ({ejercicios,removeItem,selectItem}) => {
    return (
        <div>
            <ul>

            {
                ejercicios.map(ejercicio=>(

                <li   key ={ejercicio.id}>
                    <h1>{ejercicio.titulo}</h1>
                    <p>{ejercicio.descripcion}</p>
                    <p>Is Available:{ejercicio.isAvailable.toString()}</p>
                    <button onClick={()=>removeItem(ejercicio.id)}>Eliminar</button>
                    <button onClick={()=>selectItem(ejercicio)}>Editar</button>
                </li>
                
                ))
            }

            </ul>
        </div>
    );
};

export default Ejercicios;