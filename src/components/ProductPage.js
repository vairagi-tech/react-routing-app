import React from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  // Use useParams hook to extract the productid from the URL
  const { productid } = useParams();

  // Example product data (you can fetch this from an API or database in real-world apps)
  const productData = {
    1: { name: 'Product 1', description: 'This is Product 1' },
    2: { name: 'Product 2', description: 'This is Product 2' },
    3: { name: 'Product 3', description: 'This is Product 3' },
  };

  const product = productData[productid];

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductPage;
