import axios  from "axios";


const api = axios.create({
    baseURL: 'http://localhost:3000/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

export  default  api;

export type User = {
    name: string;
    email: string;
}

export type Product = {
    name: string;
    description: string;
    price: number;
}

export type CartItem = {
    id: number;
    product: Product;
    quantity: number;
    price: number;
}

export type Cart = {
    id: number;
    items: CartItem[];
    userId: number;
}
export const getProducts = async (): Promise<Product[]> => {
    const response = await api.get('/products');
    return response.data;
}


export const createUser = async (user: User): Promise<User> => {
    const response = await api.post('/users', user);
    return response.data;
}

export const addToCart = async (userId: string, productId: string, quantity: number): Promise<Product> => {
    const response = await api.post(`/cart`, { userId, productId, quantity });
    return response.data;
};

export const getCart = async (userId: number): Promise<Cart> => {
    const response = await api.get(`/cart/${userId}`);
    return response.data;
};