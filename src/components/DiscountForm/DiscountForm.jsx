import React from 'react';
import { useForm } from 'react-hook-form';
import css from './DiscountForm.module.css';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';

export default function DiscountForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => console.log(data);

  console.log(watch('example'));
  return (
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
      {errors.phone && (
        <span className={css.alarm}>This field is required</span>
      )}

      <input type="submit" value="Get a discount" className={css.btn} />
    </form>
  );
}
