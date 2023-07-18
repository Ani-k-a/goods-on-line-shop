import React from 'react';
import css from './ProductsList.module.css';
import { useGetAllProductsQuery } from 'redux/productsAPI';
import ProductItem from 'components/ProductItem/ProductItem';
import Loader from 'components/Loader/Loader';
import ErrorViev from 'pages/ErrorVievPage/ErrorVievPage';
import { NavLink } from 'react-router-dom';
import {
  addProductToCard,
  countTotalPrice,
  countTotalQuantity,
} from 'redux/cartSlice';
import { useDispatch } from 'react-redux';

export default function ProductsList() {
  const { data = [], error, isLoading } = useGetAllProductsQuery();

  const dispatch = useDispatch();

  const addTocartHandler = (event, el) => {
    event.preventDefault();
    dispatch(addProductToCard(el));
    dispatch(countTotalPrice());
    dispatch(countTotalQuantity());
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={css.container}>
          {data.map(el => (
            <NavLink to={`/products/${el.id}`} key={el.id}>
              <ProductItem
                {...el}
                addtocartHandler={event => addTocartHandler(event, el)}
              />
            </NavLink>
          ))}
        </ul>
      )}
      {error && <ErrorViev />}
    </>
  );
}
