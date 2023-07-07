import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3333' }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => `/products/all`,
        }),
        getProductItem: builder.query({
            query: (id) => `/products/${id}`,
        }),
        getAllCategories: builder.query({
            query: () => `/categories/all`,
        }),
        getCategoryItem: builder.query({
            query: (id) => `/categories/${id}`,
        }),

    }),
})


export const { useGetAllProductsQuery, useGetAllCategoriesQuery, useGetProductItemQuery, useGetCategoryItemQuery } = productsApi;