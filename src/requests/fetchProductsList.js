import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'http://localhost:3333/';

export const fetchProductsAll = createAsyncThunk('products/fetchAllProducts', async (_, thunkApi) => {
    try {
        const response = await axios.get('/products/all');
        return response.data;

    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
}
)