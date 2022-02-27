import React, { useEffect, useState } from "react";
const LAUNCHES_QUERY = `{  categories {
  name
    products{
      name
      id
     gallery
      inStock
      attributes{
        id
        type
        
        name
        items{
          value
          displayValue
          id
        }
      }

      prices{
        amount
        currency{
          label
          symbol
        }
        
      }
      name
      brand
      description
    }
  
  }
  }`;
export const useFetch = (url) => {
  const [launches, setLaunches] = useState([]);
  const [allData, setAllData] = useState([]);
  const [attributesValue, setAttributesValue] = useState("");
  const [attributesName, setAttributesName] = useState([]);
  const [category, setCategory] = useState("all");

  const getProducts = async () => {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: LAUNCHES_QUERY }),
    });
    const request = await response.json();
    setLaunches(request.data.categories[0].products);

    setAllData(request.data.categories);
    request.data.categories.map((product) => {
      return product.products.map((pro) => {
        return pro.attributes.map((c) => {
          setAttributesName(c.name);
          setAttributesValue(c.items);
        });
      });
    });
  };
  useEffect(() => {
    getProducts();
  }, []);
  const [products, setProducts] = useState();

  const updateFilter = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "category") {
      value = e.target.textContent;
      setCategory(value);

      if (value !== "all") {
        setProducts(allData.filter((prod) => prod.name === value));
      }

      if (value === "all") {
        setProducts(allData.filter((prod) => prod.name === value));
      }
    }
  };

  return {
    attributesName,
    attributesValue,
    launches,
    allData,
    products,
    updateFilter,
    category,
  };
};
