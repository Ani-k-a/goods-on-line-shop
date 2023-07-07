// import { useState } from 'react';
import css from './SingleItemPage.module.css';
import Loader from 'components/Loader/Loader';
import ErrorViev from 'pages/ErrorVievPage/ErrorVievPage';
import { useGetProductItemQuery } from 'redux/productsAPI';

export default function SingleItemPage() {
  // const [productId, setProductId] = useState('');

  const { data = [], error, isLoading } = useGetProductItemQuery(id);

  const { title, image, discont_price, price, description } = data;

  const discount = () =>
    discont_price && Math.round((price / discont_price - 1) * 100);

  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorViev />}
      {
        <div className={css.container}>
          <div>{title}</div>
          <div className={css.block}>
            <img alt={title} src={`http://localhost:3000${image}`}></img>
            <div>
              <div className={css.priceBlock}>
                {discont_price !== null ? (
                  <>
                    <div className={css.price}>{discont_price}$</div>
                    <div className={css.oldPrice}>{price}$</div>
                    <div className={css.discount}>{discount()}%</div>
                  </>
                ) : (
                  <>
                    <div className={css.price}>{price}$</div>
                  </>
                )}
              </div>
              <button>To cart</button>
              <div>
                <p>Description</p>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}
