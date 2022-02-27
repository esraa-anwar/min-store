import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import CartContent from "./CartContent";
const Cart = ({
  value,
  name,
  removeItem,
  cart,
  counter,
  formatPrice,
  setCart,
  setCounter,
  increaseAmount,
  decreaseAmount,
  amount,
}) => {
  console.log(name, value);
  if (cart.length < 1) {
    setCounter(0);
    return (
      <div className="empty">
        <h2>Your cart is empty</h2>
      </div>
    );
  }
  return (
    <div className="cartPage">
      <div
        style={{ paddingLeft: "15rem", marginBottom: "50px", fontSize: "3rem" }}
      >
        Cart
      </div>

      <CartContent
        value={value}
        name={name}
        removeItem={removeItem}
        decreaseAmount={decreaseAmount}
        increaseAmount={increaseAmount}
        amount={amount}
        counter={counter}
        setCounter={setCounter}
        cart={cart}
        formatPrice={formatPrice}
        setCart={setCart}
      />
    </div>
  );
};

export default Cart;
