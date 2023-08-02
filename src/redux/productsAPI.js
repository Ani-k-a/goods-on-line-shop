import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://greenshopbackendapi.onrender.com' }),
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
        addPhoneNumber: builder.mutation({
            query: (newPhone) => ({
                url: `/sale/send`,
                method: 'POST',
                body: newPhone,
            }),
            invalidatesTags: ['PhoneNumber'],
        }),
        addOrder: builder.mutation({
            query: (body) => ({
                url: `/order/send`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Order'],
        })

    }),
})


export const { useGetAllProductsQuery, useGetAllCategoriesQuery, useGetProductItemQuery, useGetCategoryItemQuery, useAddPhoneNumberMutation, useAddOrderMutation } = productsApi;