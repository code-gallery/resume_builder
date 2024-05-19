import React from 'react';
import { useHistory } from 'react-router-dom';

import CartView from "./Cart.view";
import "./cart.css";

const Cart = () => {
  const history = useHistory();
  const checkout = () => {
    history.push("/checkout");
  };

  return <CartView checkout={checkout} />;
};

export default Cart;