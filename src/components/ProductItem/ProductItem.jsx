import React from 'react';
import css from './ProductItem.module.css';
import { NavLink } from 'react-router-dom';

export default function ProductItem({
  image,
  title,
  price,
  discont_price,
  id,
  addtoBasketHandler,
}) {
  const discount = () =>
    discont_price && Math.round((price / discont_price - 1) * 100);
  return (
    <li className={css.block}>
      <div className={css.imgBox}>
        <img
          className={css.img}
          src={`http://localhost:3333${image}`}
          alt={title}
        ></img>
      </div>
      <div className={css.priceBlock}>
        {discont_price !== null ? (
          <>
            <div className={css.price}>{discont_price}$</div>
            <div className={css.oldPrice}>{price}$</div>
            <div className={css.discount}>{discount()}%</div>
          </>
        ) : (
          <>
            <div className={css.price}>{price}$</div>
          </>
        )}
      </div>
      <button onClick={addtoBasketHandler}>Add to basket</button>
      <NavLink to={`/products/${id}`}>
        <h3 className={css.title}>{title}</h3>
      </NavLink>
    </li>
  );
}
