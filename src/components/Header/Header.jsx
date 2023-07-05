import React from 'react';
import Section from 'components/Section/Section';
import css from './Header.module.css';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import { SlHandbag } from 'react-icons/sl';

export default function Header() {
  return (
    <header>
      <Section>
        <div className={css.container}>
          <div className={css.logoContainer}>
            <NavLink to="/">
              <img alt="green logo" src={logo} className={css.logo} />
            </NavLink>
            <NavLink to="/category" className={css.catalog}>
              Catalog
            </NavLink>
          </div>

          <ul className={css.navList}>
            <li className={css.navIcon}>
              <NavLink to="/">Main Page</NavLink>
            </li>
            <li className={css.navIcon}>
              <NavLink to="/products">All products</NavLink>
            </li>
            <li className={css.navIcon}>
              <NavLink to="/sales">All sales</NavLink>
            </li>
          </ul>
          <NavLink to="/basket">
            <SlHandbag className={css.bag} />
          </NavLink>
        </div>
      </Section>
    </header>
  );
}
