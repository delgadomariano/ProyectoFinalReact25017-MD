import React from 'react';
import ProductList from './ProductList';

const Home = () => {
  return (
    <div className="container">
      <h1>Todos los productos</h1>
      <ProductList category="Cocktail" />
    </div>
  );
};

export default Home;
