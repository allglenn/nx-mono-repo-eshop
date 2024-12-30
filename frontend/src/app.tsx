import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';

const App: React.FC = () => {
  const userId = 1; 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage userId={userId} />} />
      </Routes>
    </Router>
  );
};

export default App;
