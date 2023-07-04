import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter, createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import Catalog from 'pages/Catalog/Catalog';
import Basket from 'pages/Basket/Basket';
import Sales from 'pages/Sales/Sales';
import Home from 'pages/Home/Home';
import Loader from 'components/Loader/Loader';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: '/catalog',
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
        path: '/',
        element: <Home />,
      },
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='greenshop' router={router}>
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
