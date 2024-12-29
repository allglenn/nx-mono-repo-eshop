import { Injectable } from "@nestjs/common";
import { Cart } from "./cart.entity";
import { ProductsService } from "@eshop-api/products";

@Injectable()
export class CartService {
    private readonly cart: Cart[] = [];

    constructor(private readonly productsService: ProductsService) {

    }

    async findAll(): Promise<Cart[]> {
        return this.cart;
    }

    async create(cart: Cart): Promise<Cart> {
        this.cart.push(cart);
        return cart;
    }

    async getCartByUserId(userId: number): Promise<Cart | undefined> {
        return this.cart.find(cart => cart.userId === userId);
    }

    async addToCart(userId: number, productId: number, quantity: number, price: number): Promise<Cart | undefined> {
        const product = await this.productsService.findById(productId);
        if (!product) {
            throw new Error('Product not found');
        }

        const cart = this.cart.find(cart => cart.userId === userId);
        if (cart) {
            const item = cart.items.find(item => item.product.id === productId);
            if (item) {
                item.quantity += quantity;
            } else {
                cart.items.push({ id: cart.items.length + 1, product, quantity, price });
            }
        } else {
            this.cart.push({ id: this.cart.length + 1, userId, items: [{ id: 1, product, quantity, price }] });
        }
        return this.cart.find(cart => cart.userId === userId);
    }
}
