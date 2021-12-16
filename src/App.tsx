import React from 'react';
import {
  Route, BrowserRouter as Router, Routes, Link, useParams,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/index';
import './App.css';
import Counter from './features/counter/Counter';

type ProductParams = {
  id: string;
}

const Product = () => {
  const { id } = useParams<ProductParams>();
  return (
    <h2>
      This is a page for product with ID:
      {id}
    </h2>
  );
};

const Index = () => (
  <h2>
    Home component
  </h2>
);

const AppRouter = () => (
  <Provider store={store}>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to={`/products/${1}`}>First product</Link>
            </li>
            <li>
              <Link to="/products/2">Second product</Link>
            </li>
            <li>
              <Link to="/counter"> Contador </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </div>
    </Router>
  </Provider>
);

export default AppRouter;
