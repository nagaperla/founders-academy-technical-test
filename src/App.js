import React, { useState } from 'react'
import './App.css';

const Checkout = ({ cart, rules }) => {
  // TODO: Implement me.
  const lb1 = cart.filter(item => item === 'lb1').length;
  const cs1 = cart.filter(item => item === 'cs1').length;
  const hp1 = cart.filter(item => item === 'hp1').length;

  // Add total
  const total = rules.lb1(lb1, 3.11) + rules.cs1(cs1, 5, 4.5) + rules.hp1(hp1, 11.23)

  return (
    <table className="totals">
      <tbody>
        <tr>
          <th scope="row">Total</th>
          <td data-testid="total">{total && total.toFixed(2) || total}</td>
        </tr>
        <tr>
          <th scope="row">Light bulb</th>
          <td data-testid="total">{lb1}</td>
        </tr>
        <tr>
          <th scope="row">Chess set</th>
          <td data-testid="total">{cs1}</td>
        </tr>
        <tr>
          <th scope="row">House plant</th>
          <td data-testid="total">{hp1}</td>
        </tr>
        <tr>
          <th scope="row">Cart content</th>
          <td data-testid="total">{cart.map(c => c).join(',')}</td>
        </tr>
      </tbody>
    </table>
   );
};

const App = () => {
  // TODO: Implement me;
  const [cart, setCart] = useState([]);
  const rules = {
    lb1: (quantity, price) => Math.ceil(quantity / 2) * price,
    cs1: (quantity, price, discountPrice) => {
      if (quantity > 2) return quantity * discountPrice;
      else return quantity * price;
    },
    hp1: (quantity, price) => quantity * price
  };

  const addLightBulb = () => {
    // TODO: Implement me.
    setCart([...cart, 'lb1'])
  };

  const addChessSet = () => {
    // TODO: Implement me.
    setCart([...cart, 'cs1'])
  };

  const addHousePlant = () => {
    // TODO: Implement me.
    setCart([...cart, 'hp1'])
  };

  return (
    <div className="App">
      <div className="cart">
        <button onClick={addLightBulb}>Light bulb</button>
        <button onClick={addChessSet}>Chess set</button>
        <button onClick={addHousePlant}>House plant</button>
      </div>
      <Checkout cart={cart} rules={rules} />
    </div>
  );
};

export default App;
