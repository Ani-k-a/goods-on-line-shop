import React from 'react';
import css from './CatalogItem.module.css';

export default function CatalogItem({ link, title }) {
  return (
    <li className={css.block}>
      <img src={link} alt={title} className={css.img}></img>
      <h3 className={css.title}>{title}</h3>
    </li>
  );
}
