import React, { useEffect } from 'react';
import css from './AllItemsPage.module.css';
import Section from 'components/Section/Section';
import ProductsList from 'components/ProductsList/ProductsList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsAll } from 'requests/fetchProductsList';
import { selectFilteredProducts } from 'redux/selectors';

export default function AllItemsPage() {
  const dispatch = useDispatch();
  const products = useSelector(selectFilteredProducts());

  console.log(products);

  useEffect(() => {
    dispatch(fetchProductsAll());
  }, [dispatch]);

  return (
    <Section>
      All products
      <div className={css.block}></div>
      <ProductsList />
    </Section>
  );
}
