import css from './ItemsFromCategoryPage.module.css';
import Section from 'components/Section/Section';
import Loader from 'components/Loader/Loader';
import ErrorViev from 'pages/ErrorVievPage/ErrorVievPage';
import Filter from 'components/Filter/Filter';
import ProductItem from 'components/ProductItem/ProductItem';
import { useParams } from 'react-router-dom';
import { useGetCategoryItemQuery } from 'redux/productsAPI';

export default function ItemsFromCategory({ getCategoty }) {
  const { id } = useParams();
  const { data, error, isLoading } = useGetCategoryItemQuery(id);

  const dates = data && data.data;
  console.log(dates);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Section>
          <h1 className={css.title}>Here mast be a category</h1>
          <Filter></Filter>
          <ul className={css.container}>
            {dates.map(el => (
              <ProductItem key={el.id} {...el} />
            ))}
          </ul>
        </Section>
      )}
      {error && <ErrorViev />}
    </>
  );
}
