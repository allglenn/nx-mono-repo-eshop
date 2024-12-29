import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CartService } from './cart.service';
import { Cart } from './cart.entity';

@Controller('cart')
export class CartController {
    constructor(private readonly cartService: CartService) {}

    @Get()
    async findAll(): Promise<Cart[]> {
        return this.cartService.findAll();
    }

    @Post()
    async create(@Body() cart: Cart): Promise<Cart> {
        return this.cartService.create(cart);
    }

    @Get(':userId')
    async getCartByUserId(@Param('userId') userId: number): Promise<Cart | undefined> {
        return this.cartService.getCartByUserId(userId);
    }

    @Post(':userId/add')
    async addToCart(
        @Param('userId') userId: number,
        @Body('productId') productId: number,
        @Body('quantity') quantity: number,
        @Body('price') price: number
    ): Promise<Cart | undefined> {
        return this.cartService.addToCart(userId, productId, quantity, price);
    }
}