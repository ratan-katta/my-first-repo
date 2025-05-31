import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/Productcart";

const HomePage = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => setProducts(res.data));
  }, []);

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
      <h1>My is Lipcart</h1>
    </div>
  );
};

export default HomePage;
