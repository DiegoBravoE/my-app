import React from 'react';

const ProducList = ({products,removeProduct,selectProduct}) => {
    return (
        <div>
            <ul>
              {
              
              products.map(product =>(

                <li   key={product.id}>
                     <h3>{product.name}</h3>
                      <p>category:{product.category}</p>
                      <p>precio:{product.precio}</p>
                      <p>Is Available:{product.isAvailable.toString()}</p>
                      <button onClick={()=>removeProduct(product.id)}>Eliminar</button>
                      <button onClick={()=>selectProduct(product)}>Editar</button>
                </li>

              ))
              }



            </ul>
        </div>
    );
};

export default ProducList;