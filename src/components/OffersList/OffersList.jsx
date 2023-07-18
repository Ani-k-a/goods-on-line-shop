import css from './OffersList.module.css';
import { useGetAllProductsQuery } from 'redux/productsAPI';
import ProductItem from 'components/ProductItem/ProductItem';
import Loader from 'components/Loader/Loader';
import ErrorViev from 'pages/ErrorVievPage/ErrorVievPage';
import { NavLink } from 'react-router-dom';
import { addToCartHandler } from 'js/addToCartHandler';
import { useDispatch } from 'react-redux';

export default function OffersList() {
  const { data = [], error, isLoading } = useGetAllProductsQuery();

  const dispatch = useDispatch();
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={css.container}>
          {data
            .filter(el => el.discont_price)
            .map(
              (el, ind) =>
                ind < 4 && (
                  <NavLink to={`/products/${el.id}`} key={el.id}>
                    <ProductItem
                      {...el}
                      addtoCartHandler={event =>
                        addToCartHandler(event, el, dispatch)
                      }
                    />
                  </NavLink>
                )
            )}
        </ul>
      )}
      {error && <ErrorViev />}
    </>
  );
}
