import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setBrands } from "../../redux/filterSlice";
import { getBrands } from "../../service/apiProduct";

function Brands() {
  const dispatch = useDispatch();
  const [brandOptions, setBrandOptions] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      const brands = await getBrands();
      setBrandOptions(brands);
    };
    fetchBrands();
  }, []);
  const handleBrandChange = (event) => {
    const selectedBrands = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    dispatch(setBrands(selectedBrands));
  };

  return (
    <div>
      <label htmlFor="brands" className="block mb-2 font-bold">
        Brands:
      </label>
      <select
        id="brands"
        multiple
        className="block w-full p-2 border rounded"
        onChange={handleBrandChange}
      >
        {brandOptions.map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Brands;
