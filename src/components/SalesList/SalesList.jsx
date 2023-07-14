import React from 'react';
import css from './Sales.list.module.css';
import { useGetAllProductsQuery } from 'redux/productsAPI';
import ProductItem from 'components/ProductItem/ProductItem';
import Loader from 'components/Loader/Loader';
import ErrorViev from 'pages/ErrorVievPage/ErrorVievPage';
import { NavLink } from 'react-router-dom';

export default function SalesList() {
  const { data = [], error, isLoading } = useGetAllProductsQuery();
  const addToBasketHandler = (event, el) => {};

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={css.container}>
          {data.map(el => {
            return (
              el.discont_price && (
                <NavLink to={`/products/${el.id}`} key={el.id}>
                  <ProductItem
                    {...el}
                    addtoBasketHandler={event => addToBasketHandler(event, el)}
                  />
                </NavLink>
              )
            );
          })}
        </ul>
      )}
      {error && <ErrorViev />}
    </>
  );
}
