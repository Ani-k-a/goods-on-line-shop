import css from './ProductsList.module.css';
import ProductItem from 'components/ProductItem/ProductItem';
import Loader from 'components/Loader/Loader';
import ErrorViev from 'pages/ErrorVievPage/ErrorVievPage';
import { useGetAllProductsQuery } from 'redux/productsAPI';
import { NavLink } from 'react-router-dom';
import { addToCartHandler } from 'js/addToCartHandler';
import { useDispatch } from 'react-redux';

export default function ProductsList() {
  const { data = [], error, isLoading } = useGetAllProductsQuery();

  const dispatch = useDispatch();
  console.log(dispatch);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={css.container}>
          {data.map(el => (
            <NavLink to={`/products/${el.id}`} key={el.id}>
              <ProductItem
                {...el}
                addtoCartHandler={event =>
                  addToCartHandler(event, el, dispatch)
                }
              />
            </NavLink>
          ))}
        </ul>
      )}
      {error && <ErrorViev />}
    </>
  );
}
