import React from "react";
import { useDispatch } from "react-redux";
import { setSort } from "../../redux/filterSlice";

const sortOptions = [
  { value: "oldToNew", label: "Old to new" },
  { value: "newToOld", label: "New to old" },
  { value: "priceHighToLow", label: "Price high to low" },
  { value: "priceLowToHigh", label: "Price low to high" },
];
function Sort() {
  const dispatch = useDispatch();
  const handleSortChange = (event) => {
    dispatch(setSort(event.target.value));
  };
  return (
    <div>
      <label htmlFor="sort" className="block mb-2 font-bold">
        Sort by:
      </label>
      <select
        id="sort"
        className="block w-full p-2 border rounded"
        onChange={handleSortChange}
      >
        <option value="">Select...</option>
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Sort;
