import React from 'react';
import css from './SingleItemPage.module.css';
import Loader from 'components/Loader/Loader';
import ErrorViev from 'pages/ErrorVievPage/ErrorVievPage';
import { useParams } from 'react-router-dom';
import { useGetProductItemQuery } from 'redux/productsAPI';
import { useDispatch } from 'react-redux';
import {
  addProductToBasket,
  countTotalPrice,
  countTotalProducts,
} from 'redux/basketSlice';

export default function SingleItemPage() {
  const { id } = useParams();

  const { data, error, isLoading } = useGetProductItemQuery(id);

  const dates = data && data[0];
  console.log(dates);

  const dispatch = useDispatch();

  const addToBasketHandler = (event, el) => {
    event.preventDefault();
    dispatch(addProductToBasket(el));
    dispatch(countTotalPrice());
    dispatch(countTotalProducts());
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={css.container}>
            <div className={css.title}>{dates.title}</div>
            <div className={css.block}>
              <img
                className={css.img}
                alt={dates.title}
                src={`http://localhost:3333${dates.image}`}
              ></img>
              <div className={css.descriptionBox}>
                <div className={css.priceBlock}>
                  {dates.discont_price !== null ? (
                    <>
                      <div className={css.price}>
                        {dates.discont_price &&
                          Math.round(
                            (dates.price / dates.discont_price - 1) * 100
                          )}
                        <span className={css.currency}>$</span>
                      </div>
                      <div className={css.oldPrice}>{dates.price}$</div>
                      <div className={css.discount}>
                        {dates.discont_price &&
                          Math.round(
                            (dates.price / dates.discont_price - 1) * 100
                          )}
                        %
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={css.price}>{dates.price}$</div>
                    </>
                  )}
                </div>
                <button className={css.button}>To cart</button>
                <div className={css.descriptionBlock}>
                  <p className={css.descriptionTitle}>Description</p>
                  <p>{dates.description}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {error && <ErrorViev />}
    </>
  );
}
