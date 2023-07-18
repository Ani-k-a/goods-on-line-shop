import React from 'react';
import { IoMdClose } from 'react-icons/io';
import css from './CartItem.module.css';
import { addProductToCart, decreaseProduct } from 'redux/cartSlice';
import { useDispatch } from 'react-redux';

export default function CartItem({
  title,
  image,
  price,
  discont_price,
  quantity,
  id,
}) {
  const dispatch = useDispatch();

  return (
    <li className={css.item}>
      <img
        className={css.img}
        alt={title}
        src={`http://localhost:3333${image}`}
      ></img>
      <div className={css.infoBox}>
        <div className={css.info}>
          <p className={css.title}>{title}</p>
          <div className={css.buttons}>
            <button
              className={css.btn}
              onClick={() => dispatch(decreaseProduct({ id }))}
            >
              -
            </button>
            <p className={css.quantity}>{quantity}</p>
            <button
              className={css.btn}
              onClick={() => dispatch(addProductToCart({ id }))}
            >
              +
            </button>
          </div>
        </div>
        <div className={css.priceBlock}>
          {discont_price ? (
            <>
              <p className={css.price}>
                {discont_price}
                <span className={css.currencyDiscont}>$</span>
              </p>
              <p className={css.discont}>{price}$</p>
            </>
          ) : (
            <p className={css.price}>
              {price}
              <span className={css.currency}>$</span>
            </p>
          )}
        </div>
      </div>

      <IoMdClose className={css.close}></IoMdClose>
    </li>
  );
}
