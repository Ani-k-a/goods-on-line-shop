import { createSlice } from "@reduxjs/toolkit";
import { fetchProductsAll } from "requests/fetchProductsList";
import { fetchCategories, fetchCategoriesList } from "requests/fetchCategotiesList";

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
            .addCase(fetchCategoriesList.pending, handlePending)

            .addCase(fetchProductsAll.rejected, handleRejected)
            .addCase(fetchCategoriesList.rejected, handleRejected)

            .addCase(fetchProductsAll.fulfilled, (state, action) => {
                state.items = action.payload;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(fetchCategoriesList.fulfilled, (state, action) => {
                state.categories = action.payload;
                state.isLoading = false;
                state.error = null;
            })
    }
}
)

export const productsReducer = productsSlice.reducer;