import {CartItem } from '@eshop-api/cart';

export class Order {
    id: string;
    userId: number;
    items: CartItem[];
    total: number;

    constructor(id: string, userId: number, items: CartItem[], total: number) {
        this.id = id;
        this.userId = userId;
        this.items = items;
        this.total = total;
    }
}