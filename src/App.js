import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import SingleProductPage from "./components/SingleProductPage";
import { useState, useEffect } from "react";
import { useFetch } from "./components/Data";
import Home from "./components/Home";
import Filter from "./components/Filter";

const url = "http://localhost:4000/";
const App = () => {
  const { updateFilter, category, products } = useFetch(url);
  const [amount, setAmount] = useState(1);
  const [cart, setCart] = useState([]);
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [currLabel, setCurrLabel] = useState("USD");

  useEffect(() => {
    console.log(cart);
  }, [cart, name, value]);

  const handleCategoryChange = (category) => {
    setCurrLabel(category);
    console.log(currLabel);
  };
  const handleAttributes = (e) => {
    let nameAttribute = e.target.name;
    let valueAttribute = e.target.textContent;

    setName(...name, nameAttribute);
    setValue(...value, valueAttribute);
  };
  console.log(name);
  console.log(value);
  const handleCart = (item) => {
    setCart([...cart, item]);
    setCounter(counter + 1);
  };
  const increaseAmount = (id) => {
    setAmount(amount + 1);
    setCounter(counter + 1);
  };
  const decreaseAmount = () => {
    if (amount <= 1) {
      setAmount(1);
    } else {
      setAmount(amount - 1);
      setCounter(counter - 1);
    }
  };
  const removeItem = (id) => {
    setCart(cart.filter((product) => product.id !== id));
    setCounter(counter - 1);
  };
  const formatPrice = (number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(number / 10);
  };
  return (
    <div className="app">
      <Router>
        <Filter
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
          handleCategoryChange={handleCategoryChange}
          currLabel={currLabel}
          updateFilter={updateFilter}
          handleCart={handleCart}
        />

        <Switch>
          <Route exact path="/">
            <Home
              handleCart={handleCart}
              formatPrice={formatPrice}
              product={products}
              category={category}
              updateFilter={updateFilter}
              currLabel={currLabel}
            />
          </Route>
          <Route path="/cart">
            <Cart
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
          </Route>

          <Route
            exact
            path="/products/:id"
            children={
              <SingleProductPage
                handleAttributes={handleAttributes}
                formatPrice={formatPrice}
                handleCart={handleCart}
                cart={cart}
                setCart={setCart}
              />
            }
          ></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
