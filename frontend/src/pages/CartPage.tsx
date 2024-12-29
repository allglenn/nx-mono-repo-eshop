import React, { useEffect, useState } from 'react';
import { getCart } from '../api';
import { Cart } from '../api';

const CartPage: React.FC<{ userId: number }> = ({ userId }) => {
  const [cart, setCart] = useState<Cart>();

  useEffect(() => {
    const fetchCart = async () => {
      const data = await getCart(userId);
      setCart(data);
    };
    fetchCart();
  }, [userId]);

return (
    <div>
        <h1>Your Cart</h1>
        <ul>
            {cart?.items.map((item: any) => (
                <li key={item.product.id}>
                    {item.product.name} - Quantity: {item.quantity}
                </li>
            ))}
        </ul>
    </div>
);
};

export default CartPage;
