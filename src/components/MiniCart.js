import React from "react";
import "./MiniCart.css";
import { Link } from "react-router-dom";
import MiniProduct from "./MiniProduct";
const MiniCart = ({
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
  return (
    <div className="miniCart">
      <MiniProduct
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

export default MiniCart;
