import React from 'react';
import css from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import {
  addProductTocart,
  countTotalPrice,
  countTotalProducts,
} from 'redux/cartSlice';

export default function ProductItem({
  image,
  title,
  price,
  discont_price,
  id,
  addtocartHandler,
}) {
  const discount = () =>
    discont_price && Math.round((price / discont_price - 1) * 100);

  const dispatch = useDispatch();

  // const addTocartHandler = (event, el) => {
  // };

  return (
    <li className={css.block}>
      <div className={css.imgBox}>
        <img
          className={css.img}
          src={`http://localhost:3333${image}`}
          alt={title}
        ></img>
        <button onClick={addtocartHandler} className={css.button}>
          Add to cart
        </button>
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
      <h3 className={css.title}>{title}</h3>
    </li>
  );
}
