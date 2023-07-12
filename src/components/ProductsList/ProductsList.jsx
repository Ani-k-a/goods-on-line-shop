import React from 'react';
import css from './ProductsList.module.css';
import { useGetAllProductsQuery } from 'redux/productsAPI';
import ProductItem from 'components/ProductItem/ProductItem';
import Loader from 'components/Loader/Loader';
import ErrorViev from 'pages/ErrorVievPage/ErrorVievPage';

export default function ProductsList() {
  const { data = [], error, isLoading } = useGetAllProductsQuery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={css.container}>
          {data.map(el => (
            <ProductItem key={el.id} {...el} />
          ))}
        </ul>
      )}
      {error && <ErrorViev />}
    </>
  );
}
