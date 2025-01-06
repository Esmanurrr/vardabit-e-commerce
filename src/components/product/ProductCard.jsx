import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { id, image, price, name } = product;

  function handleAddToCart() {
    const newItem = {
      productId: id,
      name,
      quantity: 1,
      price: parseFloat(price),
      totalPrice: parseFloat(price) * 1,
    };
    if (dispatch(addItem(newItem))) {
      console.log("added item");
    }
  }

  return (
    <div className="border border-gray-300 rounded-md shadow-sm p-4 flex flex-col items-center">
      <img
        src={image}
        alt={name}
        className="w-full h-auto object-cover rounded-md mb-4"
      />
      <div className="text-lg font-bold text-gray-700">{name}</div>
      <div className="text-gray-500">{price} $</div>
      <button
        onClick={handleAddToCart}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
