import React from 'react';
import Hero from 'components/Hero/Hero';
import CatalogHome from 'components/CatalogHome/CatalogHome';
import Discount from 'components/Discount/Discount';

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <CatalogHome></CatalogHome>
      <Discount></Discount>
    </>
  );
}
