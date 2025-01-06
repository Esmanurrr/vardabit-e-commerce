import React from "react";
import ProductList from "../product/ProductList";
import Filter from "../filtering/Filter";
import Cart from "../cart/Cart";

function Home() {
  return (
    <div className="w-full mx-auto px-4 grid grid-cols-12 gap-4">
      <div className="col-span-3 bg-gray-100 p-4 rounded">
        <h2 className="font-bold mb-4">
          <Filter />
        </h2>
      </div>
      <div className="col-span-6">
        <ProductList />
      </div>
      <div className="col-span-3 bg-gray-100 p-4 rounded">
        <h2 className="font-bold mb-4">
          <Cart />
        </h2>
      </div>
    </div>
  );
}

export default Home;
