import React, { useEffect } from 'react';
import css from './CategoriesList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoriesList } from 'requests/fetchCategotiesList';
import { selectCategories } from 'redux/selectors';
import CategortItem from 'components/CategortItem/CategortItem';

export default function CategoriesList() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  useEffect(() => {
    dispatch(fetchCategoriesList());
    console.log(categories);
  }, []);

  return (
    <ul className={css.container}>
      {categories.map(el => {
        return el.discont_price && <CategortItem key={el.id} {...el} />;
      })}
    </ul>
  );
}
