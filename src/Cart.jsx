import React, {useState} from 'react';

export default function Cart({cart, setCart}) {

    const getTotalSum = () => {
        return cart.reduce(
          (sum, {price, quantity}) => sum + price * quantity,
          0
        );
      };

    // For removing item quantity for a product while the product quantity is still above 1.
    const updateQuantityRemove = (removing) => {
        let newCart = [...cart];
        let itemInCart = newCart.find(
        (item) => removing.name === item.name
        );

        if (itemInCart) {
            itemInCart.quantity--;
            setCart(newCart);
            if (itemInCart.quantity === 0) {
                removeFromCart(removing);
            };
        } else {
        itemInCart = {
            ...removing,
            quantity: 0,
        };
        newCart.pop(itemInCart);
        setCart(newCart);
        };
    };

    // For when the quantity of the item reaches 0; the item is ejected entirely from the cart rather than staying in with a quantity of 0 or <0. 
    const removeFromCart = (productToRemove) => {
        setCart(
        cart.filter((product) => product !== productToRemove)
        );
    };

    // For incrementing the quantity of a pre-existing cart item product.
    // Product should display an incremented quantity rather than adding the same product item all over again. 
    const updateQuantityAdd = (adding) => {
        let newCart = [...cart];
            let itemInCart = newCart.find(
            (item) => adding.name === item.name
            );
            if (itemInCart) {
            itemInCart.quantity++;
            } else {
            itemInCart = {
                ...adding,
                quantity: 1,
            };
            newCart.push(itemInCart);
            }
            setCart(newCart);
        };
    return (
        <>
          <div className="products">
            {cart.map((product, index) => (
              <div className="product" key={index}>
                <h3 className="names">{product.name}</h3>
                <h4>${product.price}</h4>
                <p>Quantity: {product.quantity}</p>
                <button onClick={() => updateQuantityRemove(product)}>-</button><button onClick={() => updateQuantityAdd(product)}>+</button> 
              </div>
            ))}
          </div>
          <div className="total">Total: ${getTotalSum().toFixed(2)}</div>
        </>
      );
    }