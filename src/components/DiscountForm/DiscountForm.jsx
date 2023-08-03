import React from 'react';
import { useForm } from 'react-hook-form';
import css from './DiscountForm.module.css';
import Notiflix from 'notiflix';
import { useAddPhoneNumberMutation } from 'redux/productsAPI';

export default function DiscountForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [addPhoneNumber, { isError, isSuccess }] = useAddPhoneNumberMutation();

  const onSubmit = data => {
    addPhoneNumber(data);
    isSuccess &&
      reset(
        {
          phone: '',
        },
        {
          keepErrors: true,
          keepDirty: true,
        }
      ) &&
      Notiflix.Notify.success(
        'Thank you. Wait for a message with a discount code.'
      );
    isError &&
      Notiflix.Notify.info('Something is going wromg. Please try again.');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <input
        className={css.input}
        {...register('phone', {
          required: true,
          patern: {
            value: /\(?\+\(?49\)?[ ()]?([- ()]?\d[- ()]?){10}/,
            message: 'Invalid phone number',
          },
        })}
        placeholder="+49"
      />
      {errors.phone && (
        <span className={css.alarm}>This field is required</span>
      )}

      <input type="submit" value="Get a discount" className={css.btn} />
    </form>
  );
}
