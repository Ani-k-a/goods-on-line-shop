import React from 'react';
import Section from 'components/Section/Section';
import css from './BasketPage.module.css';
import { NavLink } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import OrderDetails from 'components/OrderDetails/OrderDetails';
import OrderList from 'components/OrderList/OrderList';

export default function Basket() {
  return (
    <Section>
      <div className={css.block}>
        <h2 className={css.title}>Shopping cart</h2>
        <NavLink to="/products" className={css.link}>
          Back to the store
          <IoIosArrowForward className={css.arrow}></IoIosArrowForward>
        </NavLink>
        <div className={css.container}>
          <OrderList></OrderList>
          <OrderDetails></OrderDetails>
        </div>
      </div>
    </Section>
  );
}
