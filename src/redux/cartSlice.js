import { createSlice } from '@reduxjs/toolkit';

const findProductById = (state, action) => state.products.findIndex((el) => el.id === action.payload.id);

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        totalQuantity: 0,
        totalPrice: 0
    },
    reducers: {
        addProductToCart: (state, action) => {
            const productById = findProductById(state, action);
            console.log(productById);
            (productById !== -1)
                ? (state.products[productById].quantity += 1) : state.products.push({ ...action.payload, 'quantity': 1 })
        },
        deleteProduct: (state, action) => {
            state.products.filter((el) => el.id !== action.payload.id)
        },
        decreaseProduct: (state, action) => {
            const productById = findProductById(state, action);
            (state.products[productById].quantity !== 0) ? state.products[productById].quantity -= 1 : deleteProduct(state, action);
        },

        countTotalPrice: (state, action) => {
            state.totalPrice = state.products.reduce((total, { price, discont_price, quantity }) => {
                discont_price ? total += discont_price * quantity : total += price * quantity;
                return total;
            }, 0);

        },
        countTotalQuantity: (state, action) => {
            state.totalQuantity = state.products.reduce((total, { quantity }) => {
                total += quantity;
                console.log(quantity);
                return total;
            }, 0);
        },
    },
})

export const {
    addProductToCart,
    cleancart,
    countTotalPrice,
    countTotalQuantity,
    decreaseProduct,
    deleteProduct,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;