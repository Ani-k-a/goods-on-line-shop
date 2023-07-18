import Section from 'components/Section/Section';
import React from 'react';
import Filter from 'components/Filter/Filter';
import SalesList from 'components/SalesList/SalesList';
import css from './SalesPage.module.css';
import Title from 'components/Title/Title';

export default function Sales() {
  return (
    <Section>
     <Title title='Products with sale'></Title>
      <Filter></Filter>
      <SalesList />
    </Section>
  );
}
