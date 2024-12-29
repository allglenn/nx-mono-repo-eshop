import { Injectable } from "@nestjs/common";
import { Order } from "./order.entity";
import { CartItem } from "@eshop-api/cart";

@Injectable()
export class OrdersService {
    private readonly orders: Order[] = [];

    async findAll(): Promise<Order[]> {
        return this.orders;
    }

    async createOrder(userId: number, items: CartItem[], total: number): Promise<Order> {
        const order = { id: Date.now().toString(), userId, items, total };
        this.orders.push(order);
        return order;
    }

    async getOrderByUserId(userId: number): Promise<Order | undefined> {
        return this.orders.find(order => order.userId === userId);
    }


}