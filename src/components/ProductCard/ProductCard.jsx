import React from 'react';
import css from './ProductCard.module.css';

export default function ProductCard({
  title,
  link,
  price,
  oldPrice,
  discount,
}) {
  return (
    <div>
      <img className={css.img} src={link} alt={title}></img>
      <div className={css.priceBlock}>
        <div className={css.price}>{price}$</div>
        {discount && (
          <>
            <div className={css.oldPrice}>{oldPrice}</div>
            <div className={css.discount}>{discount}</div>
          </>
        )}
      </div>

      <h3 className={css.title}>{title}</h3>
    </div>
  );
}
