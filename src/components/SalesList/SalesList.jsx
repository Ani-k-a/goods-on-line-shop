import React from 'react';
import css from './Sales.list.module.css';
import { useGetAllProductsQuery } from 'redux/productsAPI';
import ProductItem from 'components/ProductItem/ProductItem';
import Loader from 'components/Loader/Loader';
import ErrorViev from 'pages/ErrorVievPage/ErrorVievPage';
import { NavLink } from 'react-router-dom';
import { addToCartHandler } from 'js/addToCartHandler';
import { useDispatch } from 'react-redux';

export default function SalesList() {
  const { data = [], error, isLoading } = useGetAllProductsQuery();

  const dispatch = useDispatch();

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
                    addtoCartHandler={event =>
                      addToCartHandler(event, el, dispatch)
                    }
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
