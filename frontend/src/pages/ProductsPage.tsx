import React, { useEffect, useState } from 'react';
import { getProducts } from '../api';
import { Product } from '../api';

const ProductPage: React.FC = () => {
    
  const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        getProducts().then((products) => setProducts(products));
    }, []);

    return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#333', borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>Products</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {products.map((product) => (
        <li key={product.name} style={{ margin: '10px 0', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
          <strong>{product.name}</strong> - {product.description} - <span style={{ color: '#007BFF' }}>${product.price}</span>
        </li>
        ))}
      </ul>
    </div>
    );
};

export default ProductPage;
