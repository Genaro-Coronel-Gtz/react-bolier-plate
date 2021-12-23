import React from 'react';
import { useParams } from 'react-router-dom';

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

export default Product;
