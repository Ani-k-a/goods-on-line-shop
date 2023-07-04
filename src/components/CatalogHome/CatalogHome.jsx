import React from 'react';
import css from './CatalogHome.module.css';
import Section from 'components/Section/Section';
import { NavLink } from 'react-router-dom';
// import CatalogItem from 'components/CatalogItem/CatalogItem';

export default function CatalogHome({ arr }) {
  return (
    <div>
      <Section>
        <div className={css.titleBlock}>
          <h2 className={css.title}>Catalog</h2>
          <NavLink to="/category" className={css.link}>
            All categories
          </NavLink>
        </div>
        <ul className={css.list}>
          {/* {arr.map(el => (
            <CatalogItem key={el.id} />
          ))} */}
        </ul>
      </Section>
    </div>
  );
}
