import { Product } from '@eshop-api/products';



export class CartItem {
    id: number;
    product: Product;
    quantity: number;
    price: number;

    constructor(id: number, product: Product, quantity: number, price: number) {
        this.id = id;
        this.product = product;
        this.quantity = quantity;
        this.price = price;
    }
}

export class Cart {
    id: number;
    items: CartItem[];
    userId: number;

    constructor(id: number, items: CartItem[], userId: number) {
        this.id = id;
        this.items = items;
        this.userId = userId;
    }
}