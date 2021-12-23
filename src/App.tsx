import React from 'react';
import {
  Route, BrowserRouter as Router, Routes, Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/index';
import './App.css';
import Counter from './pages/counter/Counter';
import Product from './pages/product/Product';
import Dashboard from './pages/dashboard/Dashboard';
import Pokemon from './pages/Pokemon/Pokemon';

const AppRouter = () => (
  <Provider store={store}>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
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
            <li>
              <Link to="/todos"> Todos </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/todos" element={<Pokemon />} />
        </Routes>
      </div>
    </Router>
  </Provider>
);

export default AppRouter;
