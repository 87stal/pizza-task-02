
import React  from 'react';
import PizzaList from './PizzaList/PizzaList';

import './App.css';

import menuPizza from '../Menu/pizza.json'


function App() {

  return (
    <>
    <header className="App-header">
    <h1 className = "titleApp">Order pizza</h1>
      </header>
    <PizzaList pizza = {menuPizza} />
    </>
  );
}

export default App;
