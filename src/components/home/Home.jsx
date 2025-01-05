import React from "react";
import ProductList from "../product/ProductList";

function Home() {
  return (
    <div>
      <div>Filtering</div>
      <ProductList />
      <div>Cart</div>
    </div>
  );
}

export default Home;
