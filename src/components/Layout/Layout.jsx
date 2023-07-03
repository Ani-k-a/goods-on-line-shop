import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Section from 'Section/Section';
import { SlHandbag } from 'react-icons/sl';
import css from './Layouts.module.css';
import logo from '../../images/logo.png';
import Footer from 'components/Footer/Footer';

export default function Layout() {
  return (
    <div>
      <header>
        <Section>
          <div className={css.container}>
            <div className={css.logoContainer}>
              <NavLink to="/">
                <img alt="green logo" src={logo} className={css.logo} />
              </NavLink>
              <NavLink className={css.catalog}>Catalog</NavLink>
            </div>

            <ul className={css.navList}>
              <li className={css.navIcon}>
                <NavLink to="/">Main Page</NavLink>
              </li>
              <li className={css.navIcon}>
                <NavLink to="/catalog">All products</NavLink>
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
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
