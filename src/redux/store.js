import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "redux/productsAPI";
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        productsApi.middleware,
    ]
},
);

setupListeners(store.dispatch);