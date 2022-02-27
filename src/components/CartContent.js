import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import { ImBin } from "react-icons/im";
const CartContent = ({
  cart,
  formatPrice,
  setCart,
  setCounter,
  counter,
  increaseAmount,
  decreaseAmount,
  amount,
  removeItem,
  name,
  value,
}) => {
  const clearCart = () => {
    setCart([]);
    setCounter(0);
  };

  return (
    <>
      {" "}
      {cart.map((product) => {
        console.log(product);
        return (
          <>
            <div className="cartContainer">
              <div className="contentProduct">
                <button
                  className="clear"
                  onClick={() => removeItem(product.id)}
                >
                  <ImBin />
                </button>
                <h2 className="brand">{product.brand}</h2>
                <p className="name">{product.name}</p>
                <p>
                  <h2>{formatPrice(product.prices[0].amount)}</h2>
                </p>
                {}
              </div>
              <div className="imageContainer">
                <div>
                  <button
                    className="amount-button"
                    onClick={() => {
                      increaseAmount(product.id);
                    }}
                  >
                    +
                  </button>
                  <p className="amount-para">{amount}</p>
                  <button className="amount-button" onClick={decreaseAmount}>
                    -
                  </button>
                </div>
                <div>
                  <img
                    className="CartImg"
                    src={product.gallery[0]}
                    alt={product.name}
                  />
                </div>
              </div>
              <div className="line" />
            </div>
          </>
        );
      })}
      <div className="link-container">
        <button
          type="button"
          className="link-btn clear-btn"
          onClick={clearCart}
        >
          clear shopping cart
        </button>
      </div>
    </>
  );
};

export default CartContent;
