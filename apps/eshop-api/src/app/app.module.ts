import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from '@eshop-api/products';
import { UsersModule } from '@eshop-api/users';
import { CartModule } from '@eshop-api/cart';


@Module({
  imports: [
    ProductsModule,
    UsersModule,
    CartModule
  ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule { }
