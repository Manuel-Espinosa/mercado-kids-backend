# Mercado Kids Backend

## Table of Contents
- [Project Overview](#project-overview)
- [Installation](#installation)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This project is an academic endeavor aimed at creating a backend environment for an e-commerce platform targeted towards kids. The goal of this project is to provide a foundation for building an e-commerce application that caters to the specific needs and interests of children.

The project will incorporate various features and functionalities to support an engaging and child-friendly online shopping experience. It will include user management, product catalog management, order processing, payment integration, and more. The focus will be on creating a secure, reliable, and scalable backend system to facilitate seamless e-commerce operations.

In addition to the core e-commerce functionalities, the project will also consider important aspects such as data privacy, security measures, and compliance with relevant regulations to ensure a safe and trusted environment for young users.

Further details about the specific business logic and implementation details of the e-commerce platform will be provided in subsequent updates.

Please note that this project is for academic purposes only and does not represent a fully functional production-ready application.

## Installation

To get started with this project, follow the steps below to set up your development environment.

### Prerequisites

- Node.js: Make sure you have Node.js installed on your machine. You can download it from the official website: https://nodejs.org

To set up the project on your local machine, please follow these steps:

1. Clone the repository:

```git clone https://github.com/Manuel-Espinosa/mercado-kifs-backend.git```

2. Navigate to the project directory

3. Install the dependencies:

```npm install```

4. Create a .env file in the project root directory and add the required environment variables. You can refer to the .env.example file for the necessary variables.

5. Start the development server:

```npm start```

6. The project should now be running locally. You can access it in your web browser at http://localhost:5000.


## API Reference

## Workspace: mercado-kids

A collection of APIs for managing products and users.

---

## Retrieve Products

Retrieves a list of products based on name and category.

- URL: `http://localhost:5000/products?name=w&category=elec`
- Method: GET

---

## Create Product

Creates a new product.

- URL: `http://localhost:5000/products`
- Method: POST
- Headers:
  - Content-Type: application/json
- Body:
  ```json
  {
    "sku": "P1234",
    "name": "Example Product",
    "category": "Electronics",
    "brand": "Brand X",
    "description": "This is an example product",
    "status": "Active",
    "dimensions": {
      "height": 10,
      "length": 20,
      "width": 5
    },
    "weight": 2.5,
    "inventory": 100,
    "images": [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg"
    ]
  }

## Create User

Creates a new user.

- **URL**: `http://localhost:5000/users`
- **Method**: POST
- **Headers**:
  - Content-Type: application/json
- **Body**:
  ```json
  {
    "father": {
      "name": "John Doe",
      "age": 40,
      "rfc": "ABCD1234",
      "phone": "1234567890",
      "email": "john.doe@example.com",
      "address": {
        "street": "123 Main St",
        "neighbourhood": "Example Neighbourhood",
        "zip": "12345"
      },
      "child": {
        "name": "Jane Doe 10",
        "birthdate": "2005-01-01",
        "phone": "9876543210",
        "avatar": "https://example.com/avatar.jpg"
      },
      "password": "secret123",
      "bankaccount": {
        "numbercard": "1234567890123456",
        "expdate": "12/24",
        "ccv": "123"
      },
      "status": "active"
    }
  }

  ## Update User

Updates an existing user.

- **URL**: `http://localhost:5000/users/648965ecdae8e9a596d310d5`
- **Method**: PUT
- **Headers**:
  - Content-Type: application/json
- **Body**:
  ```json
  {
    "child": {
      "name": "John Doe Jr.",
      "birthdate": "2000-01-01",
      "phone": "1234567890",
      "avatar": "http://example.com/avatar.jpg"
    }
  }

Please note that the above API reference assumes a base URL of http://localhost:5000 for the API endpoint. Make sure to replace it with the appropriate base URL according to your setup.

## Contributing

Thank you for your interest in contributing to our academic purpose repository! We welcome contributions from everyone. By participating in this project, you agree to abide by the following guidelines:

How to Contribute
-----------------
1. Fork the repository to your GitHub account.
2. Create a new branch for your contribution.
3. Make your changes or additions to the codebase.
4. Test your changes to ensure they work as intended.
5. Commit your changes with a clear and descriptive commit message.
6. Push your changes to your forked repository.
7. Submit a pull request to the original repository.

Code Style and Guidelines
-------------------------
- Follow the existing code style and conventions used in the repository.
- Write clear, concise, and well-documented code.
- Include comments where necessary to explain the functionality or intention of the code.
- Ensure your changes do not introduce any linting errors or warnings.

Reporting Issues
----------------
If you encounter any issues, bugs, or have suggestions for improvements, please submit them via the issue tracker on GitHub. Provide as much detail as possible, including steps to reproduce the issue and any relevant error messages.

Feedback and Discussions
------------------------
We encourage open discussions and feedback regarding the project. Feel free to join the conversation by participating in the GitHub issues and pull requests. Please keep discussions respectful and constructive.

Academic Integrity
------------------
While contributing to this academic purpose repository, we expect all contributors to uphold the principles of academic integrity. Do not engage in any form of plagiarism, unauthorized collaboration, or unethical behavior. Respect the intellectual property rights of others and provide proper attribution when referencing external sources.

## License

This project is licensed under the [MIT License](LICENSE).

