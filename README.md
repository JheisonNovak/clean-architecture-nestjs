# Clean Architecture Example with NestJS

This repository provides an example of implementing **Clean Architecture** using [NestJS](https://nestjs.com/).

## 🛠 Technologies

-   **NestJS**
-   **TypeORM**
-   **SQLite**

## 📁 Project Structure

The project is structured following a modular approach with a layered architecture, aiming to adhere to the principles of **Clean Architecture**:

    src/
    ├── modules/
    │   ├── module-example/
    │   │   ├── models/
    │   │   │   ├── dtos/
    │   │   │   ├── entities/
    │   │   │   ├── interfaces/
    │   │   │   ├── enums/
    │   │   ├── repositories/
    │   │   ├── use-cases/
    │   │   │   ├── use-case-example-1/
    │   │   │   └── use-case-example-2/
    ├── shared/
    │   ├── config/
    │   ├── utils/

### Key Concepts

-   **Modules**: Each module encapsulates a specific part of the application's domain, such as a `UserModule` or `ProductModule`, containing models, repositories, and use cases.
-   **Models**: Contains data structures, including **DTOs**, **entities**, **enums** and **interfaces**.
-   **Repositories**: Handle database operations and encapsulate data persistence logic, capable of performing an ORM switch, for example.
-   **Use Cases**: Represent the application's business logic, each focusing on a specific action (e.g., creating or updating an entity). They interact with repositories to perform the required operations.

## 🚀 Getting Started

### Prerequisites

-   **Node.js** (version 16 or higher)
-   **Yarn** or **npm**

### Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/JheisonNovak/clean-architecture-nestjs.git
    cd clean-architecture-nestjs
    ```

2. Install the dependencies:

    ```
    npm install
    # or
    yarn install
    ```

3. Running the Application:

    ```
    npm run start:dev
    # or
    yarn start:dev
    ```

4. Using:

    You can test de example application accessing swagger in: http://127.0.0.1:3000/api or http://localhost:3000/api

## 📚 Learn More

For more information on the concepts and practices used in this repository:

-   [NestJS Documentation](https://docs.nestjs.com/)
-   [TypeORM Documentation](https://typeorm.io/#/)
-   Clean Code: A Handbook of Agile Software Craftsmanship - Robert C. Martin

## 🤝 Contributing

Feel free to submit issues or pull requests. Contributions are welcome!
