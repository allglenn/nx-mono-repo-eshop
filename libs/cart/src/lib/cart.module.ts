import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { ProductsModule } from '@eshop-api/products';



@Module({
  controllers: [
    CartController
  ],
  providers: [
    CartService
  ],
  exports: [
    CartService
  ],
  imports: [
    ProductsModule
  ]
})

export class CartModule {}
