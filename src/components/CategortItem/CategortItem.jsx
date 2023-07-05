import React from 'react';
import css from './CategortItem.module.css';

export default function CategortItem({ title, image }) {
  return (
    <div className={css.imgBox}>
      <img
        className={css.img}
        src={`http://localhost:3333${image}`}
        alt={title}
      ></img>
      <h3 className={css.title}>{title}</h3>
    </div>
  );
}
