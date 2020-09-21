import React, {useState} from 'react';

export default function Cart({cart, setCart}) {
    return (
        <>
          <div className="products">
            {cart.map((product, index) => (
              <div className="product" key={index}>
                <h3 className="names">{product.name}</h3>
                <h4>${product.price}</h4>
              </div>
            ))}
          </div>
        </>
      );
    }