import css from './ItemsFromCategoryPage.module.css';
import Section from 'components/Section/Section';
import Loader from 'components/Loader/Loader';
import ErrorViev from 'pages/ErrorVievPage/ErrorVievPage';
import Filter from 'components/Filter/Filter';
import ProductItem from 'components/ProductItem/ProductItem';
import { useParams } from 'react-router-dom';
import { useGetCategoryItemQuery } from 'redux/productsAPI';
import Title from 'components/Title/Title';
import { addToCartHandler } from 'js/addToCartHandler';
import { useDispatch } from 'react-redux';

export default function ItemsFromCategory() {
  const { id } = useParams();
  const { data, error, isLoading } = useGetCategoryItemQuery(id);

  const dates = data && data.data;
  const dispatch = useDispatch();
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Section>
          <Title title={data.category.title}></Title>
          <Filter></Filter>
          <ul className={css.container}>
            {dates.map(el => (
              <ProductItem
                key={el.id}
                {...el}
                addtoCartHandler={event =>
                  addToCartHandler(event, el, dispatch)
                }
              />
            ))}
          </ul>
        </Section>
      )}
      {error && <ErrorViev />}
    </>
  );
}
