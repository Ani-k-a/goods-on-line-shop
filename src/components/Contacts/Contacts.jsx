import React from 'react';
import css from './Contacts.module.css';

export default function Contacts() {
  return (
    <div className={css.contactsBlock}>
      <div className={css.contacts}>
        <h3>Contact</h3>
      </div>
      <div className={css.address}>
        <h3>Address</h3>
        <address>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</address>
        <p>Working Hours:</p>
        <p>24 hours a day</p>
      </div>
    </div>
  );
}
