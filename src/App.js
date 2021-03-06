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
      <header className="heading">
        <h1 className="title">
          <span className="border">Vet Radar Frontend Practical Task</span>
          <a href="#" class="headerbtn border" onClick={() => switchPage(PAGE_CART)}>Cart [{cart.reduce((sum, { quantity }) => sum + quantity, 0)}]</a>
          <a href="#" class="headerbtn border" onClick={() => switchPage(PAGE_PRODUCTS)}>Products</a>
        </h1>
      </header>
      {page === PAGE_PRODUCTS && (<Products cart={cart} setCart={setCart}/>)}
      {page === PAGE_CART && (<Cart cart={cart} setCart={setCart}/>)}
    </div>
    );
  }

export default App;
