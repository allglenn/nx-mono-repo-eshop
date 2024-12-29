import React, { useEffect, useState } from 'react';
import { getProducts } from '../api';
import { Product } from '../api';

const ProductPage: React.FC = () => {
    
  const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        getProducts().then((products) => setProducts(products));
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.name}>{product.name} - {product.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductPage;
