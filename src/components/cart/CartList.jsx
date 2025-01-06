import React from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "../../redux/cartSlice";

function CartList() {
  const totalCartPrice = useSelector(getTotalCartPrice);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!totalCartPrice) return null;
  return (
    <>
      <ul>
        {cart.map((product) => (
          <CartItem product={product} key={product.id} />
        ))}
      </ul>
      <div className="text-center mt-5">
        <div>Total Price: {totalCartPrice}$</div>
        <button className="mt-2 mx-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Checkout
        </button>
        <button
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
      </div>
    </>
  );
}

export default CartList;
