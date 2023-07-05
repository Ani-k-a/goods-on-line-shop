import { configureStore } from "@reduxjs/toolkit";
// import { filterReducer } from "./sliceFilter";
import { productsReducer } from "./sliceProducts";

export const store = configureStore({
    reducer: {
        products: productsReducer,
        // filter: filterReducer,
    },
});