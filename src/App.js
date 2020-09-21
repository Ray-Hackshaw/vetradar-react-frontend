import React, {useState} from 'react';
import Products from './Products';
import './App.css';
import Cart from './Cart';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);
  const switchPage = (nextPage) => {
    setPage(nextPage);
  };
  return (
    <div className="App">
      <h1>Vet Radar Front End React Tests</h1>
      <button onClick={() => switchPage(PAGE_PRODUCTS)}>Products</button>
      <button onClick={() => switchPage(PAGE_CART)}>My Cart</button>
      {page === PAGE_PRODUCTS && (<Products cart={cart} setCart={setCart}/>)}
      {page === PAGE_CART && (<Cart cart={cart} setCart={setCart}/>)}
    </div>
    );
  }

export default App;
