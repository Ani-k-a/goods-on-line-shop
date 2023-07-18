import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "redux/productsAPI";
import { setupListeners } from '@reduxjs/toolkit/query';
import { cartReducer } from "./cartSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        productsApi.middleware,
    ]
},
);

setupListeners(store.dispatch);