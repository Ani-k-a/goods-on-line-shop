import React, { useEffect, useState } from 'react';
import css from './Filter.module.css';

export default function Filter({ products, setFilteredProducts }) {
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
        <label>Price</label>
        <input
          type="number"
          value={fromPrice}
          placeholder="from"
          min="0"
          onChange={ev => setFromPrice(ev.target.value)}
        ></input>
        <input
          type="number"
          value={toPrice}
          placeholder="to"
          onChange={ev => setToPrice(ev.target.value)}
        ></input>
      </div>
      <div>
        <label>Discounted items</label>
        <input
          type="checkbox"
          value={discountedOnly}
          onChange={ev => setDiscountedOnly(ev.target.checked)}
        ></input>
      </div>
      <div>
        <label>Sorted</label>
        <select
          value={sortedOrder}
          onChange={ev => setSortedOrder(ev.target.value)}
        >
          <option>by default</option>
          <option value="asc">Acending</option>
          <option value="des">Decending</option>
        </select>
      </div>
    </div>
  );
}
