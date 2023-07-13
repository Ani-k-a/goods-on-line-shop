import React from 'react';
import css from './ProductsList.module.css';
import { useGetAllProductsQuery } from 'redux/productsAPI';
import ProductItem from 'components/ProductItem/ProductItem';
import Loader from 'components/Loader/Loader';
import ErrorViev from 'pages/ErrorVievPage/ErrorVievPage';
import {
  addProductToBasket,
  countTotalPrice,
  countTotalProducts,
} from 'redux/basketSlice';
import { useDispatch } from 'react-redux';

export default function ProductsList() {
  const { data = [], error, isLoading } = useGetAllProductsQuery();

  const dispatch = useDispatch();

  const addToBasketHandler = (event, el) => {
    event.preventDefault();
    dispatch(addProductToBasket(el));
    dispatch(countTotalPrice());
    dispatch(countTotalProducts());
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={css.container}>
          {data.map(el => (
            <ProductItem
              key={el.id}
              {...el}
              addtoBasketHandler={event => addToBasketHandler(event, el)}
            />
          ))}
        </ul>
      )}
      {error && <ErrorViev />}
    </>
  );
}
