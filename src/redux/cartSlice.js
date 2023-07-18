import { createSlice } from '@reduxjs/toolkit';

const findProductById = (state, action) => state.products.find((el) => el.id === action.payload.id);

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        // totalQuantity: 0,
        totalPrice: 0
    },
    reducers: {
        addProductToCard: (state, action) => {
            const productById = findProductById(state, action);
            productById
                ? (productById.quantity += 1) : state.products.push({ ...action.payload, quantity: 1 })
        },
        deleteProduct: (state, action) => {
            state.products.filter((el) => el.id !== action.payload.id)
        },
        decreaseProduct: (state, action) => {
            // const productById = state.products.find((el) => el.id === action.payload.id)
        },
        // cleancart: (state) => {
        //     state.products = []
        // },
        countTotalPrice: (state, action) => {
            state.totalPrice =
                state.products.reduce((total, { price, discount_price, quantity }) => {
                    discount_price ? total += discount_price * quantity : total += price * quantity;
                    return total;
                }, 0);

        },
        // countTotalQuantity: (state, action) => {
        //     state.totalQuantity =
        //         state.products.reduce((total, { quantity }) => {
        //             total += quantity;
        //             return total
        //         }, 0);
        // },
    },
})

export const {
    addProductToCard,
    cleancart,
    countTotalPrice,
    countTotalQuantity,
    decreaseProduct,
    deleteProduct,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;