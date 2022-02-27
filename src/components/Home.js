import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

import { useFetch } from "./Data";
import Products from "./Products";
import Filter from "./Filter";
const url = " http://localhost:4000/";

const Home = ({ currLabel, product, category, updateFilter, formatPrice }) => {
  return (
    <div>
      <Products
        currLabel={currLabel}
        product={product}
        category={category}
        formatPrice={formatPrice}
      />
    </div>
  );
};

export default Home;
