import React from 'react';
import css from './OrderDetails.module.css';

export default function OrderDetails() {
  return (
    <div className={css.container}>
      <h3 className={css.title}>Order details</h3>
      <div className={css.total}>
        <p className={css.totalTitle}>Total</p>
        <p className={css.totalPrice}>
          price<span className={css.totalCurrency}>$</span>
        </p>
      </div>
    </div>
  );
}
