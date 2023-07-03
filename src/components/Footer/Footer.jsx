import React from 'react';
import Section from 'Section/Section';
import Map from 'components/Map/Map';
import Contacts from 'components/Contacts/Contacts';

export default function Footer() {
  return (
    <footer>
      <Section>
        <Contacts></Contacts>
        <Map></Map>
      </Section>
    </footer>
  );
}
