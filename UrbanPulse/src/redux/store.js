import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./search/searchItemSlice";
import loaderReducer from "./search/loadingSlice";
import textReducer from "./search/footerLinkSlice";
import windowToggleReducer from './profile/windowToggleSlice'; // Import your slice reducer

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    loader: loaderReducer,
    text: textReducer,

    windowToggle: windowToggleReducer, // Include your slice reducer here
    // Add your slice reducer to the store
  },
});

export default store;
