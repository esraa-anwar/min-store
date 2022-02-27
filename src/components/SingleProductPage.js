import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useFetch } from "./Data";
import ImageGallery from "./ImageGallery";
import "./style.css";
const url = " http://localhost:4000/";
const SingleProductPage = ({
  handleCart,
  cart,
  setCart,
  formatPrice,
  handleAttributes,
}) => {
  const { id } = useParams();
  const [value, setValue] = useState([]);

  const { launches } = useFetch(url);
  const product = launches.filter((it) => id === it.id);

  return (
    <div className="singleProductsContainer">
      {product.map((item) => {
        return (
          <div className="singleProducts" key={product.id}>
            <div className="imgContainer">
              <ImageGallery images={item.gallery} />
            </div>

            <div className="description">
              <h1>{item.brand}</h1>
              <h2>{item.name}</h2>
              {item.attributes.map((attr) => {
                return (
                  <div>
                    <h2>{attr.name}</h2>
                    {attr.name === "Size"
                      ? attr.items.map((item) => {
                          return (
                            <>
                              <button
                                name="Size"
                                onClick={handleAttributes}
                                className="size"
                              >
                                {item.value}
                              </button>
                            </>
                          );
                        })
                      : null}
                    {attr.name === "Capacity"
                      ? attr.items.map((item) => {
                          return (
                            <>
                              <button
                                name="Capacity"
                                onClick={handleAttributes}
                                className="size"
                              >
                                {item.value}
                              </button>
                            </>
                          );
                        })
                      : null}
                    {attr.name === "Touch ID in keyboard"
                      ? attr.items.map((item) => {
                          return (
                            <>
                              <button
                                name="Touch ID in keyboard"
                                onClick={handleAttributes}
                                className="size"
                              >
                                {item.value}
                              </button>
                            </>
                          );
                        })
                      : null}
                    {attr.name === "With USB 3 ports"
                      ? attr.items.map((item) => {
                          return (
                            <>
                              <button
                                name="With USB 3 ports"
                                onClick={handleAttributes}
                                className="size"
                              >
                                {item.value}
                              </button>
                            </>
                          );
                        })
                      : null}
                    {attr.name === "Color"
                      ? attr.items.map((item) => {
                          return (
                            <>
                              <button
                                name="Color"
                                className="color"
                                onClick={handleAttributes}
                                style={{ background: `${item.value}` }}
                              ></button>
                            </>
                          );
                        })
                      : null}
                  </div>
                );
              })}
              <h2>{formatPrice(item.prices[0].amount)}</h2>
              {item.inStock ? (
                <button className="addCart">
                  <Link
                    onClick={() => handleCart(item)}
                    cart={cart}
                    setCart={setCart}
                    className="link"
                  >
                    ADD TO CART
                  </Link>
                </button>
              ) : (
                "out of stock"
              )}

              <p>{`${item.description.replace(/<[^>]+>/g, "")}`}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SingleProductPage;
