import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsArrowUpSquareFill } from "react-icons/bs";
import img1 from "./svg.png";
import { useFetch } from "./Data";
import MiniCart from "./MiniCart";
const url = " http://localhost:4000/";

const Filter = ({
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
  updateFilter,
  product,

  handlePrices,
  handleCategoryChange,
  currLabel,
}) => {
  const [show, setShow] = useState(false);
  const { launches, allData } = useFetch(url);
  const handleModel = () => {
    setShow(true);
    if (show === true) {
      setShow(false);
    }
  };
  return (
    <div className="Header">
      <div className="linksContainer">
        {allData.map((c, index) => {
          const { name } = c;

          return (
            <Link
              to="/"
              key={index}
              className="link"
              type="button"
              name="category"
              onClick={updateFilter}
              key={index}
            >
              {name}
            </Link>
          );
        })}
      </div>

      <div className="centerItem">
        <Link className="link">
          <img src={img1} />
        </Link>
      </div>
      <div className="lastItem">
        <select
          className="link"
          className="dropDown"
          name="category"
          value={currLabel}
          onChange={(event) => handleCategoryChange(event.target.value)}
        >
          {launches.slice(0, 1).map((curr) => {
            return curr.prices.map((curr) => {
              return (
                <option id="1" value={curr.currency.label}>
                  {curr.currency.symbol} {curr.currency.label}
                </option>
              );
            });
          })}
        </select>
        <Link className="link" onClick={handleModel}>
          <span className="cart-container">
            <AiOutlineShoppingCart className="svg" />

            <span className="cart-value">{counter}</span>
          </span>
        </Link>
        {show ? (
          <MiniCart
            value={value}
            name={name}
            removeItem={removeItem}
            decreaseAmount={decreaseAmount}
            increaseAmount={increaseAmount}
            amount={amount}
            cart={cart}
            counter={counter}
            setCart={setCart}
            setCounter={setCounter}
            formatPrice={formatPrice}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Filter;
