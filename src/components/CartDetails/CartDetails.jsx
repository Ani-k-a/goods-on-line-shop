import React from 'react';
import css from './CartDetails.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useAddOrderMutation } from 'redux/productsAPI';
import { useForm } from 'react-hook-form';
import Notiflix from 'notiflix';
import { deleteProducts } from 'redux/cartSlice';

export default function CartDetails() {
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const totalOrder = useSelector(state => state.cart);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [addOrder, isLoading, error] = useAddOrderMutation();

  const dispatch = useDispatch();

  const onSubmit = data => {
    addOrder({ ...data, ...totalOrder }) && dispatch(deleteProducts());
    // dispatch(deleteProducts());
    reset(
      {
        phone: '',
      },
      {
        keepErrors: true,
        keepDirty: true,
      }
    );
    Notiflix.Notify.success('Thank you for your order!');
  };
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
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <input
          className={css.input}
          {...register('phone', {
            required: true,
            patern: {
              value: /(\(?([\d \-\)\–\+\/\(]+)\)?([ .\-–\/]?)([\d]+))/,
              message: 'Invalid phone number',
            },
          })}
          placeholder="+49"
        />
        {errors.phone && <span className={css.alarm}>Enter your number</span>}

        <input type="submit" value="Order" className={css.btn} />
      </form>
    </div>
  );
}
