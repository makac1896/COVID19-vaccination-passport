# COVID Vaccination Passport App - README

## Introduction

Welcome to the COVID Vaccination Passport App developed for Zimbabwe. This README provides an overview of the application's code and functionality.

### Overview

The COVID Vaccination Passport App is designed to help individuals in Zimbabwe manage their vaccination records. This app allows users to register, log in, and keep track of their vaccination status. Users can also access a menu of features related to their vaccination history.

### Code

The core functionality of the app is implemented using Node.js and Express.js, with authentication handled by Passport.js. Below is an overview of the code provided:

#### Dependencies

- `express`: The Express.js web application framework is used for routing and handling HTTP requests.
- `bcrypt`: This library is used for hashing passwords securely before storing them in the database.
- `passport`: Passport.js is used for authentication and login management.
- `records`: The `User` model is loaded from the `records` module, which likely represents the database schema for user records.
- `auth`: The `forwardAuthenticated` middleware from the `auth` module is used to ensure that certain routes are only accessible to logged-out users.

#### Routes

1. **Login Page:** Users can access the login page using a GET request to '/users/login'. The `forwardAuthenticated` middleware ensures that only logged-out users can access this page. This route renders the 'login' view.

2. **Register Page:** Users can access the registration page using a GET request to '/users/register'. Like the login page, it is only accessible to logged-out users. This route renders the 'register' view.

3. **Register:** Users can register for the app using a POST request to '/users/register'. The code handles form validation, password hashing, and user creation. If registration is successful, users are redirected to the login page with a success message.

4. **Login:** Users can log in using a POST request to '/users/login'. Passport.js is used for authentication, and on successful login, users are redirected to '/menu'. On failure, users are redirected back to the login page with an error message.

5. **Logout:** Users can log out using a GET request to '/users/logout'. This route logs the user out, flashes a success message, and redirects them to the login page.

#### User Model

The User model represents user records and is likely connected to a database. It includes fields for `name`, `email`, `password`, `role`, and `vaccinated`.

#### Development Schedule

The README does not provide a detailed development schedule but mentions that development has been phased out over five months. It outlines three development phases: Design, Build, and Testing and Marketing, each with specific objectives and activities.

### Getting Started

To run the COVID Vaccination Passport App, follow these steps:

1. Ensure you have Node.js and npm installed on your machine.

2. Clone the repository to your local machine.

3. Install the project dependencies using the `npm install` command.

4. Set up a database and configure the connection in the application (not shown in the provided code).

5. Start the application using the `npm start` command.

6. Access the app in your web browser at the specified port (e.g., http://localhost:3000).

### Conclusion

This README provides an overview of the COVID Vaccination Passport App's code and functionality. For more detailed information, please refer to the codebase and any accompanying documentation.

Feel free to reach out for further assistance or information about this application.
