import css from './AllItemsPage.module.css';
import Section from 'components/Section/Section';
import ProductsList from 'components/ProductsList/ProductsList';
import Filter from 'components/Filter/Filter';
import Title from 'components/Title/Title';

export default function AllItemsPage() {
  return (
    <Section>
      <Title title="All products"></Title>
      <Filter></Filter>
      <ProductsList />
    </Section>
  );
}
