import React from 'react';
import css from './CartDetails.module.css';
import { useSelector } from 'react-redux';

export default function CartDetails() {
  const totalPrice = useSelector(state => state.cart.totalPrice);

  return (
    <div className={css.container}>
      <h3 className={css.title}>Order details</h3>
      <div className={css.total}>
        <p className={css.totalTitle}>Total</p>
        <p className={css.totalPrice}>
          {totalPrice}
          <span className={css.totalCurrency}>$</span>
        </p>
      </div>
    </div>
  );
}
