import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: null,
  brands: [],
  models: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSort(state, action) {
      state.sort = action.payload;
    },
    setBrands(state, action) {
      state.brands = action.payload;
    },
    setModels(state, action) {
      state.models = action.payload;
    },
  },
});

export const { setSort, setBrands, setModels } = filterSlice.actions;

export default filterSlice.reducer;
