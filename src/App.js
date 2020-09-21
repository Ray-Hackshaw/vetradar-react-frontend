import React, {useState} from 'react';
import './App.css';

function App() {
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
  return (
    <div className="App">
      <h1>Vet Radar Front End React Tests</h1>
    </div>
    );
  }

export default App;
