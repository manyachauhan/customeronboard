import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const products = [
  {
    id: 1,
    name: 'Id Verification API',
    description: 'Detailed extraction of data and validation of data',
    image: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/identity-verification-10262921-8309955.png',
  },
  {
    id: 2,
    name: 'Biometric API',
    description: 'Detailed description of Biometric product with required use case and functionality',
    image: 'https://cdn-icons-png.flaticon.com/512/4841/4841490.png',
  },
  {
    id: 3,
    name: 'Docupass',
    description: 'Detailed description of Docpass with necessary required docpass section and changes.',
    image: 'https://docupass.app/asset/signature.svg',
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
