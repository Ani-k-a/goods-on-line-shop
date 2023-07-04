import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import Catalog from 'pages/Catalog/Catalog';
import Basket from 'pages/Basket/Basket';
import Sales from 'pages/Sales/Sales';
import Home from 'pages/Home/Home';
import Loader from 'components/Loader/Loader';
import ErrorViev from 'components/ErrorViev/ErrorViev';
import AllItemsPage from 'pages/AllItemsPage/AllItemsPage';
import SingleItemPage from 'pages/SingleItemPage/SingleItemPage';
import ItemsFromCategory from 'pages/ItemsFromCategory/ItemsFromCategory';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <ErrorViev />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/category',
        element: <Catalog />,
      },
      {
        path: '/basket',
        element: <Basket />,
      },
      {
        path: '/sales',
        element: <Sales />,
      },
      {
        path: '/products',
        element: <AllItemsPage />,
      },
      {
        path: '/products/:id',
        element: <SingleItemPage />,
      },
      {
        path: '/category/:id',
        element: <ItemsFromCategory />,
      },
      {
        path: '/*',
        element: <ErrorViev />,
      },

    ],
  }
],
  { basename: "/greenshop" })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </RouterProvider>
  </React.StrictMode>
);
