import React, { useEffect } from 'react';
import css from './Sales.list.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsAll } from 'requests/fetchProductsList';
import { selectFilteredProducts } from 'redux/selectors';
import ProductItem from 'components/ProductItem/ProductItem';

export default function SalesList() {
  const dispatch = useDispatch();
  const products = useSelector(selectFilteredProducts);

  useEffect(() => {
    dispatch(fetchProductsAll());
    console.log(products);
  }, []);

  return (
    <ul className={css.container}>
      {products.map(el => {
        return el.discont_price && <ProductItem key={el.id} {...el} />;
      })}
    </ul>
  );
}
