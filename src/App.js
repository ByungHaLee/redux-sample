import React from 'react';
import logo from './logo.svg';
import Counter from './features/counter/Counter';
import './App.css';
import CounterClass from "./features/counterclass/CounterClass";
import ProductList from "./features/ProductList/ProductList";
import ShoppingCart from "./features/ShoppingCart/ShoppingCart";

function App() {
  return (
    <div className="App">
      <ProductList/>
      <hr/>
      <ShoppingCart/>
    </div>
  );
}

export default App;
