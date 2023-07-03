import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './Loader/Loader';
import Layout from './Layout/Layout';
import Home from 'pages/Home/Home';
import Catalog from 'pages/Catalog/Catalog';
import ErrorViev from './ErrorViev/ErrorViev';
import Basket from 'pages/Basket/Basket';
import Sales from 'pages/Sales/Sales';

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog/" element={<Catalog />} />
          <Route path="basket/" element={<Basket />} />
          <Route path="sales/" element={<Sales />} />
        </Route>
        <Route path="*" element={<ErrorViev />} />
      </Routes>
    </Suspense>
  );
};
