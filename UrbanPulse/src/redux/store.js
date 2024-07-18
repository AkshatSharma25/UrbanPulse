import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./search/searchItemSlice";
import loaderReducer from "./search/loadingSlice";
export const store = configureStore({
  reducer: {
    items: itemsReducer,
    loader: loaderReducer, // Add your slice reducer to the store
  },
});

export default store;
