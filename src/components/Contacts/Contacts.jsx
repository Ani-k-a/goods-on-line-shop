import React from 'react';
import css from './Contacts.module.css';
import { PiInstagramLogoThin } from 'react-icons/pi';
import { PiWhatsappLogoThin } from 'react-icons/pi';

export default function Contacts() {
  return (
    <div className={css.contactsBlock}>
      <h2 className={css.visuallyHidden}>Contacts and address</h2>
      <div className={css.contacts}>
        <h3 className={css.title}>Contact</h3>
        <address className={css.phone}>
          <a href="tel:+499999999999">+49 999 999 99 99</a>
        </address>
        <ul className={css.contactList}>
          <li className={css.contactItem}>
            <a href="/*">
              <PiInstagramLogoThin className={css.contactLogo} />
              Instagram
            </a>
          </li>
          <li className={css.contactItem}>
            <a href="/*">
              <PiWhatsappLogoThin className={css.contactLogo} />
              WhatsApp
            </a>
          </li>
        </ul>
      </div>
      <div className={css.address}>
        <h3 className={css.title}>Address</h3>
        <address className={css.adressDescription}>
          Linkstraße 2, 8 OG, 10785, Berlin, Deutschland
        </address>
        <p>Working Hours:</p>
        <p className={css.hours}>24 hours a day</p>
      </div>
    </div>
  );
}
