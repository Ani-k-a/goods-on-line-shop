import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'http://localhost:3333';

export const fetchCategoriesList = createAsyncThunk('products/fetchAllCategories', async (_, thunkApi) => {
    try {
        const response = await axios.get('/categories/all');
        console.log(response.data);
        return response.data;

    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
}
)