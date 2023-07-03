import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Section from 'components/Section/Section';
import { SlHandbag } from 'react-icons/sl';
import css from './Layouts.module.css';
import logo from '../../images/logo.png';
import Map from 'components/Map/Map';
import Contacts from 'components/Contacts/Contacts';

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
              <NavLink to="/catalog" className={css.catalog}>
                Catalog
              </NavLink>
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
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Section>
          <Contacts></Contacts>
        </Section>
        <Map></Map>
      </footer>
    </div>
  );
}
