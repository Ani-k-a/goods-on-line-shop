import css from './AllItemsPage.module.css';
import Section from 'components/Section/Section';
import ProductsList from 'components/ProductsList/ProductsList';
import Filter from 'components/Filter/Filter';

export default function AllItemsPage() {
  return (
    <Section>
      <h1 className={css.title}>All products</h1>
      <Filter></Filter>
      <ProductsList />
    </Section>
  );
}
