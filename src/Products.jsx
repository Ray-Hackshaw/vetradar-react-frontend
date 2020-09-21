import React, {useState} from 'react';

export default function Products({setCart, cart}) {
    const [products] = useState([
        {
        name: 'Sledgehammer',
        price: 125.76
        },
        {
        name: 'Axe',
        price: 190.51
        },
        {
        name: 'Bandsaw',
        price: 562.14
        },
        {
        name: 'Chisel',
        price: 13.9
        },
        {
        name: 'Hacksaw',
        price: 19.45
        }
    ]);

    const addToCart = (product) => {
        let newCart = [...cart];
        let itemInCart = newCart.find(
          (item) => product.name === item.name
        );
        if (itemInCart) {
          itemInCart.quantity++;
        } else {
          itemInCart = {
            ...product,
            quantity: 1,
          };
          newCart.push(itemInCart);
        }
        setCart(newCart);
      };

      return (
        <>
          <div className="products">
            {products.map((product, idx) => (
              <div className="product" key={idx}>
                <h3>{product.name}</h3>
                <h4>${product.price.toFixed(2)}</h4>
                <button onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </>
      );
}