

## E-Commerce API & Frontend Project

This project is a modular and scalable e-commerce application built using the Nx monorepo framework. It consists of a **NestJS backend** and a **React frontend**.

## Features

- **Backend** (NestJS):
  - User management (authentication and registration)
  - Product catalog
  - Shopping cart
  - Order processing

- **Frontend** (React):
  - View products
  - Add items to cart
  - Place orders
  - Integration with the backend API

## Project Structure

```
ecommerce-project/
├── apps/
│   ├── api/         # NestJS backend application
│   ├── frontend/    # React frontend application
├── libs/
│   ├── users/       # User management library
│   ├── products/    # Product management library
│   ├── cart/        # Shopping cart library
│   ├── orders/      # Order processing library
├── tools/           # Custom Nx tools
└── nx.json          # Nx workspace configuration
```

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (>= 16.x)
- npm or yarn
- Nx CLI: `npm install -g nx`

---

### Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd ecommerce-project
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the applications**:

   - **Backend** (NestJS API):
     ```bash
     nx serve api
     ```
     The backend will run at `http://localhost:3000`.

   - **Frontend** (React):
     ```bash
     nx serve frontend
     ```
     The frontend will run at `http://localhost:4200`.

---

### Dependency Graph

To visualize the dependency graph of the workspace, run:

```bash
nx graph
```

This will generate an interactive graph of the project's dependencies. You can also export the graph as an image:

```bash
nx graph --image
```


![Dependency Graph](/graph.png)

---

### API Documentation

The backend provides the following API endpoints:

#### Users
- `GET /users` - Retrieve all users
- `POST /users` - Register a new user

#### Products
- `GET /products` - Retrieve all products
- `POST /products` - Add a new product

#### Cart
- `GET /cart` - Retrieve the user's cart
- `POST /cart` - Add items to the cart

#### Orders
- `POST /orders` - Place an order

---

### Development Workflow

#### Run Tests
Run unit tests for all apps and libraries:

```bash
nx test
```

#### Linting
Lint the code for all apps and libraries:

```bash
nx lint
```

#### Build for Production
Build the applications for production:

- **Backend**:
  ```bash
  nx build api
  ```

- **Frontend**:
  ```bash
  nx build frontend
  ```

---

### Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature-name`)
5. Open a Pull Request

---

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

### Acknowledgments

- Built with [Nx](https://nx.dev/), [NestJS](https://nestjs.com/), and [React](https://reactjs.org/).
  

