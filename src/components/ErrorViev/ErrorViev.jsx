import React from 'react';
import error from '../../images/error.jpg';
import Section from 'Section/Section';

export default function ErrorViev() {
  return (
    <Section>
      <img src={error} alt="Error 404"></img>
    </Section>
  );
}
