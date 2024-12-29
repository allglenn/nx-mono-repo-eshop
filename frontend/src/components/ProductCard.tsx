import React from 'react';
import { addToCart } from '../api';
import { Product } from '../api';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    const handleAddToCart = () => {
        addToCart('1', product.name, 1);
    };

    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button onClick={handleAddToCart}>Add to cart</button>
        </div>
    );
};

export default ProductCard;