import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MiniProduct.css";
import { ImBin } from "react-icons/im";
const MiniProduct = ({
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
      <p className="Counter">MY BAG {counter}:items</p>
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
                <h2 className="min-brand">{product.brand}</h2>
                <p className="minName">{product.name}</p>
                <p className="price">{formatPrice(product.prices[0].amount)}</p>
                {}
              </div>
              <div className="imageContainer">
                <div>
                  <button
                    className="min-amount-button"
                    onClick={() => {
                      increaseAmount(product.id);
                    }}
                  >
                    +
                  </button>
                  <p className="min-amount-para">{amount}</p>
                  <button
                    className="min-amount-button"
                    onClick={decreaseAmount}
                  >
                    -
                  </button>
                </div>
                <div>
                  <img
                    className="miniCartImg"
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
        <Link type="button" className="miniLink-btn viewBtn" to="/cart">
          VIEW BAG
        </Link>
        <button type="button" className="miniLink-btn check-btn">
          CHECK OUT
        </button>
      </div>
    </>
  );
};

export default MiniProduct;
