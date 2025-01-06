import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decItemQuantity,
  getCart,
  getCurrentQuantityById,
  incItemQuantity,
} from "../../redux/cartSlice";

function CartItem({ product }) {
  const { id, name, quantity, totalPrice } = product;
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  return (
    <div>
      <li className="mb-2 text-center">
        <div className="flex-row items-center justify-between">
          <button
            onClick={() => dispatch(incItemQuantity(id))}
            className="px-2 py-1 text-white bg-slate-400 rounded-full"
          >
            +
          </button>
          <span className="mx-4 text-lg font-semibold text-white px-2 py-1 rounded-md bg-blue-500">
            {totalPrice} {currentQuantity}
          </span>
          <button
            onClick={() => dispatch(decItemQuantity(id))}
            className=" px-2 py-1 text-white bg-slate-400 rounded-full"
          >
            -
          </button>
        </div>
      </li>
    </div>
  );
}

export default CartItem;
