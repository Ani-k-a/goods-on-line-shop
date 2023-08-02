import React, { useEffect, useState } from 'react';
import css from './Filter.module.css';

export default function Filter({
  products,
  setFilteredProducts,
  onlySale = false,
}) {
  const [fromPrice, setFromPrice] = useState();
  const [toPrice, setToPrice] = useState();
  const [discountedOnly, setDiscountedOnly] = useState(false);
  const [sortedOrder, setSortedOrder] = useState();

  useEffect(() => {
    const filteredProducts = products.filter(el => {
      const actualPrice = el.discont_price || el.price;
      return (
        (!fromPrice || actualPrice > Number(fromPrice)) &&
        (!toPrice || actualPrice < Number(toPrice)) &&
        (!discountedOnly || el.discont_price)
      );
    });
    const sortedProducts = filteredProducts.sort((a, b) => {
      const actualPriceA = a.discont_price || a.price;
      const actualPriceB = b.discont_price || b.price;
      if (sortedOrder === 'asc') {
        return actualPriceA - actualPriceB;
      } else if (sortedOrder === 'des') {
        return actualPriceB - actualPriceA;
      } else {
        return 0;
      }
    });
    setFilteredProducts(sortedProducts);
  }, [fromPrice, toPrice, discountedOnly, sortedOrder, products]);

  return (
    <div className={css.container}>
      <div>
        <label className={css.lable}>Price</label>
        <input
          className={css.inputFrom}
          type="number"
          value={fromPrice}
          placeholder="from"
          min="0"
          onChange={ev => setFromPrice(ev.target.value)}
        ></input>
        <input
          className={css.inputTo}
          type="number"
          value={toPrice}
          placeholder="to"
          min="1"
          onChange={ev => setToPrice(ev.target.value)}
        ></input>
      </div>
      {!onlySale && (
        <div className={css.checkboxBlock}>
          <label className={css.lableCheckbox} htmlFor="checkbox">
            Discounted items
          </label>
          <input
            className={css.customCheckbox}
            type="checkbox"
            name="checkbox"
            value={discountedOnly}
            onChange={ev => setDiscountedOnly(ev.target.checked)}
          ></input>
        </div>
      )}
      <div>
        <label className={css.lable}>Sorted</label>
        <select
          className={css.select}
          value={sortedOrder}
          onChange={ev => setSortedOrder(ev.target.value)}
        >
          <option className={css.option}>by default</option>
          <option className={css.option} value="asc">
            acending
          </option>
          <option className={css.option} value="des">
            decending
          </option>
        </select>
      </div>
    </div>
  );
}
