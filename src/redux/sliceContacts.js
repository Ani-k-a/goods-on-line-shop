import { createSlice } from "@reduxjs/toolkit";
import { fetchProductsAll } from "requests/fetchProductsList";
import { fetchCategories } from "requests/fetchCategotiesList";

const handlePending = state => { state.isLoading = true };
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};


export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        categories: [],
        isLoading: false,
        error: null
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProductsAll.pending, handlePending)
            .addCase(fetchCategories.pending, handlePending)

            .addCase(fetchProductsAll.rejected, handleRejected)
            .addCase(fetchCategories.rejected, handleRejected)

            .addCase(fetchProductsAll.fulfilled, (state, action) => {
                state.products.push(action.payload);
                state.isLoading = false;
                state.error = null;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categories.push(action.payload);
                state.isLoading = false;
                state.error = null;
            })
    }
}
)

export const productsReducer = productsSlice.reducer;