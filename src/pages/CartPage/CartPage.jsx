import React from 'react';
import Section from 'components/Section/Section';
import css from './CartPage.module.css';
import { NavLink } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import CartDetails from 'components/CartDetails/CartDetails';
import CartList from 'components/CartList/CartList';

export default function cart() {
  return (
    <Section>
      <div className={css.block}>
        <h2 className={css.title}>Shopping cart</h2>
        <NavLink to="/products" className={css.link}>
          Back to the store
          <IoIosArrowForward className={css.arrow}></IoIosArrowForward>
        </NavLink>
        <div className={css.container}>
          <CartList></CartList>
          <CartDetails></CartDetails>
        </div>
      </div>
    </Section>
  );
}
