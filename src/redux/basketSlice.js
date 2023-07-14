import { createSlice } from '@reduxjs/toolkit';

const findProductById = (state, action) => state.products.find((el) => el.id === action.payload.id);

const basketSlice = createSlice({
    name: 'basket',
    initialState: [],
    reducers: {
        addProductToBasket: (state, action) => {
            const productById = findProductById(state, action)
            productById
                ? (productById.quantity += 1) : state.products.push({ ...action.payload, quantity: 1 })
        },
        deleteProduct: (state, action) => {
            state.products.filter((el) => el.id !== action.payload.id)
        },
        decreaseProduct: (state, action) => {
            // const productById = state.products.find((el) => el.id === action.payload.id)
        },
        cleanBasket: (state) => {
            state.products = []
        },
        countTotalPrice: (state, action) => {
        },
        countTotalProducts: (state, action) => {
            state.totalProducts = state.products.length
        },
    },
})

export const {
    addProductToBasket,
    cleanBasket,
    countTotalPrice,
    countTotalProducts,
    decreaseProduct,
    deleteProduct,
} = basketSlice.actions

export const basketReducer = basketSlice.reducer;