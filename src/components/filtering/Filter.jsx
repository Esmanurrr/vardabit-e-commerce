import React from "react";
import Sort from "./Sort";
import Brands from "./Brands";
import Models from "./Models";
import { useDispatch } from "react-redux";
import { setBrands, setModels, setSort } from "../../redux/filterSlice";

function Filter() {
  const dispatch = useDispatch();
  const handleSortChange = (sort) => {
    dispatch(setSort(sort));
  };
  const handleBrandsChange = (brands) => {
    dispatch(setBrands(brands));
  };
  const handleModelsChange = (models) => {
    dispatch(setModels(models));
  };
  return (
    <div>
      <Sort onChange={handleSortChange} />
      <Brands onChange={handleBrandsChange} />
      <Models onChange={handleModelsChange} />
    </div>
  );
}

export default Filter;
