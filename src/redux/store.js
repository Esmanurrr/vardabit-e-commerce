import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import filterReducer from "./filterSlice";
import searchReducer from "./searchSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    filter: filterReducer,
    search: searchReducer,
  },
});

export default store;
