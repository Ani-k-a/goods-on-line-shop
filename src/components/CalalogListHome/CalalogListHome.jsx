import React from 'react';
import css from './CalalogListHome.module.css';

import { useGetAllProductsQuery } from 'redux/productsAPI';
import Loader from 'components/Loader/Loader';
import ErrorViev from 'pages/ErrorVievPage/ErrorVievPage';
import CategoriesItem from 'components/CategoriesItem/CategoriesItem';

export default function CalalogListHome() {
  const { data = [], error, isLoading } = useGetAllProductsQuery();

  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorViev />}
      {
        <ul className={css.container}>
          {data
            .filter(el => el.discont_price)
            .map(
              (el, ind) => ind < 4 && <CategoriesItem key={el.id} {...el} />
            )}
        </ul>
      }
    </>
  );
}
