import React, {useState} from 'react';

export default function Cart({cart, setCart}) {

    const getTotalSum = () => {
        return cart.reduce(
          (sum, {price, quantity}) => sum + price * quantity,
          0
        );
      };


    return (
        <>
          <div className="products">
            {cart.map((product, index) => (
              <div className="product" key={index}>
                <h3 className="names">{product.name}</h3>
                <h4>${product.price}</h4>
                <p>Quantity: {product.quantity}</p>
              </div>
            ))}
          </div>
          <div className="total">Total: ${getTotalSum().toFixed(2)}</div>
        </>
      );
    }