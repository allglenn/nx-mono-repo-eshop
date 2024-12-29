import { Injectable } from "@nestjs/common";
import { Product } from "./product.entity";

@Injectable()
export class ProductsService {
    private products: Product[] = [
        new Product(1, "salad", "fresh salad", 5),
        new Product(2, "bread", "fresh bread", 2),
        new Product(3, "milk", "fresh milk that experie in 3 days ", 1),
        new Product(4, "cheese", "fresh cheese", 3),
        new Product(5, "butter", "organic butter", 4),
        new Product(6, "yogurt", "greek yogurt", 2),
        new Product(7, "apple", "red apple", 1),
        new Product(8, "banana", "ripe banana", 1),
        new Product(9, "orange", "juicy orange", 1),
        new Product(10, "grapes", "seedless grapes", 2)

    ];

    async findAll(): Promise<Product[]> {
        return this.products;
    }

    async create(product: Product): Promise<Product> {
        this.products.push(product);
        return product;
    }

    async findById(id: number): Promise<Product | undefined> {
        return this.products.find(product => product.id === id);
    }

    async remodeById(id: number): Promise<void> {
        this.products = this.products.filter(product => product.id !== id);
    }

    async addProduct(product: Product): Promise<Product> {
        this.products.push(product);
        return product;
    }
}