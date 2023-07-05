import Section from 'components/Section/Section';
import React from 'react';
import Filter from 'components/Filter/Filter';
import SalesList from 'components/SalesList/SalesList';
import css from './SalesPage.module.css';

export default function Sales() {
  return (
    <Section>
      <h1 className={css.title}>Products with sale</h1>
      <Filter></Filter>
      <SalesList />
    </Section>
  );
}
