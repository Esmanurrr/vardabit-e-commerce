import React from "react";

function ProductCard({ imgUrl, price, name }) {
  return (
    <div>
      <div>{imgUrl}</div>
      <div>{price} $</div>
      <div>{name}</div>
      <button>add to cart</button>
    </div>
  );
}

export default ProductCard;
