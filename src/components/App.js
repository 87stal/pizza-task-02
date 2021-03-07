
import React, { useState, useEffect } from 'react';
import PizzaList from './PizzaList/PizzaList';
// import Order from './Order/Order';
// import Statistics from './Statistics/Statistics';

import './App.css';
import { v4 } from 'uuid';
import menuPizza from '../Menu/pizza.json'

function App() {
  // const [order, setOrder] = useState({});
  // const [filter, setFilter] = useState('');

  return (
    <>
    <header className="App-header">
    <h1 className = "titleApp">Order pizza</h1>
      </header>
    <PizzaList pizza = {menuPizza} />
   
    {/* <Statistics/> */}
    </>
  );
}

export default App;
