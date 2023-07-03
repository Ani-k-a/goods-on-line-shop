import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './Loader/Loader';
import Layout from './Layout/Layout';
import Home from 'pages/Home/Home';
import Catalog from 'pages/Catalog/Catalog';
import ErrorViev from './ErrorViev/ErrorViev';
import Sales from 'pages/Sales/Sales';
import Basket from 'pages/Basket/Basket';

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog/" element={<Catalog />} />
          <Route path="sales/" element={<Sales />} />
          <Route path="basket/" element={<Basket />} />
        </Route>
        <Route path="*" element={<ErrorViev />} />
      </Routes>
    </Suspense>
  );
};
