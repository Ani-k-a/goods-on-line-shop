import { createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
    name: 'baset',
    initialState: [],
    reducers: {
        addProductToBasket: (state, action) => {
            //ищет тут наш продукт
            const productById = state.products.find((el) => el.id === action.payload.id)
            productById
                ? (productById.quantity += 1) // если он есть то увеличиваем qunatity
                : // если нет, то создаем продукт и добавляем ему количестов 1
                state.products.push({ ...action.payload, quantity: 1 })
        },
        deleteProduct: (state, action) => {
            state.products.filter((el) => el.id !== action.payload.id)
        },
        decreaseProduct: (state, action) => {
            const productById = state.products.find((el) => el.id === action.payload.id)
            // const index = state.products.findIndex //найти индекс по обхекту
            // productById.qunatity > 1 ? (productById.quantity -= 1) : //splice удаляете полностью элемент
        },
        cleanBasket: (state) => {
            state.products = []
        },
        countTotalPrice: (state, action) => {
            //reduce () метод массива
            // product.price * product.qunatity
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