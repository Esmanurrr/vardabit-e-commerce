import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTotalCartPrice } from "../../redux/cartSlice";
import { setSearchQuery } from "../../redux/searchSlice";

function Navbar() {
  const totalCartPrice = useSelector(getTotalCartPrice);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleSearchChange = (e) => {
    setInput(e.target.value);
    dispatch(setSearchQuery(e.target.value));
    console.log(e.target.value);
  };

  return (
    <header className="bg-blue-600 text-white">
      <div className="flex justify-around px-5 py-4 uppercase">
        <h1 className="text-xl font-semibold">Vardabit</h1>
        <input
          value={input}
          onChange={handleSearchChange}
          className="px-3 py-1 text-sm outline-none text-black"
          placeholder="Search Something"
        />
        <div>{totalCartPrice} $</div>
        <div>User</div>
      </div>
    </header>
  );
}

export default Navbar;
