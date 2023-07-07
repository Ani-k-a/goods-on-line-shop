import React from 'react';
import css from './Offers.module.css';
import Section from 'components/Section/Section';
import Title from 'components/Title/Title';
import OffersList from 'components/OffersList/OffersList';

export default function Offers() {
  return (
    <Section>
      <Title title="Sales"></Title>
      <OffersList></OffersList>
    </Section>
  );
}
