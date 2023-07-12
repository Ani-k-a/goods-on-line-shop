import React from 'react';
import css from './OffersList.module.css';
import { useGetAllProductsQuery } from 'redux/productsAPI';
import ProductItem from 'components/ProductItem/ProductItem';
import Loader from 'components/Loader/Loader';
import ErrorViev from 'pages/ErrorVievPage/ErrorVievPage';

export default function OffersList() {
  const { data = [], error, isLoading } = useGetAllProductsQuery();
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={css.container}>
          {data
            .filter(el => el.discont_price)
            .map((el, ind) => ind < 4 && <ProductItem key={el.id} {...el} />)}
        </ul>
      )}
      {error && <ErrorViev />}
    </>
  );
}
