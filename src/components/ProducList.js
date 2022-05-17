import React from 'react';

const ProducList = ({products}) => {
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
                </li>

              ))
              }



            </ul>
        </div>
    );
};

export default ProducList;