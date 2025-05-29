import React from 'react';
import ProductList from './ProductList';

const Coffee = () => {
  return (
    <div className="container">
      <h1>Coffee</h1>
      <ProductList category="Coffee / Tea" />
    </div>
  );
};

export default Coffee;
