import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useFetch } from "./Data";
import { AiOutlineShoppingCart } from "react-icons/ai";

const url = " http://localhost:4000/";

const Products = ({
  currLabel,
  product,
  category,
  attributesName,
  handleCart,
  attributesValue,
}) => {
  const { launches, allData } = useFetch(url);

  return (
    <div className="products">
      <div className="listItems">
        <div className="categoryName"> {category}</div>
        {product
          ? product.map((prod) => {
              return prod.products.map((prod) => {
                return (
                  <div key={prod.id} className="card">
                    <Link to={`/products/${prod.id}`}>
                      {prod.inStock ? (
                        <img
                          className="productImg"
                          src={prod.gallery[0]}
                          alt={prod.name}
                        />
                      ) : (
                        <>
                          <img
                            className="productImg"
                            style={{ opacity: "0.3" }}
                            src={prod.gallery[0]}
                            alt={prod.name}
                          />

                          <div class="middle" style={{ opacity: "1" }}>
                            <h3 className="text">OUT OF STOCK</h3>
                          </div>
                        </>
                      )}
                    </Link>

                    <div className="centered">
                      {prod.inStock ? (
                        <span
                          className="card-icon"
                          onClick={() => handleCart(prod)}
                        >
                          <AiOutlineShoppingCart />
                        </span>
                      ) : null}
                    </div>
                    <p className="productName">{prod.name}</p>
                    <p>
                      {prod.prices.map((curr) => {
                        if (curr.currency.label === currLabel) {
                          return (
                            <p>
                              {curr.currency.symbol}
                              {curr.amount}
                            </p>
                          );
                        } else {
                          return <p> {curr.amount[0]}</p>;
                        }
                      })}
                    </p>
                  </div>
                );
              });
            })
          : allData.slice(1).map((prod) => {
              return prod.products.map((prod) => {
                return (
                  <div key={prod.id} className="card">
                    <Link to={`/products/${prod.id}`}>
                      {prod.inStock ? (
                        <img
                          className="productImg"
                          src={prod.gallery[0]}
                          alt={prod.name}
                        />
                      ) : (
                        <>
                          <img
                            className="productImg"
                            style={{ opacity: "0.3" }}
                            src={prod.gallery[0]}
                            alt={prod.name}
                          />

                          <div class="middle" style={{ opacity: "1" }}>
                            <h3 className="text">OUT OF STOCK</h3>
                          </div>
                        </>
                      )}
                    </Link>

                    <div className="centered">
                      {prod.inStock ? (
                        <span
                          className="card-icon"
                          onClick={() => handleCart(prod)}
                        >
                          <AiOutlineShoppingCart />
                        </span>
                      ) : null}
                    </div>
                    <p className="productName">{prod.name}</p>
                    <h3>
                      {prod.prices.map((curr) => {
                        if (curr.currency.label === currLabel) {
                          return (
                            <p>
                              {curr.currency.symbol}
                              {curr.amount}
                            </p>
                          );
                        } else {
                          return <p> {curr.amount[0]}</p>;
                        }
                      })}
                    </h3>
                  </div>
                );
              });
            })}
      </div>
    </div>
  );
};

export default Products;
