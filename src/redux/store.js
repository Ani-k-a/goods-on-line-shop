import { configureStore } from "@reduxjs/toolkit";
// import { filterReducer } from "./sliceFilter";
import { productsReducer } from "./sliceContacts";

export const store = configureStore({
    reducer: {
        products: productsReducer,
        // filter: filterReducer,
    },
});