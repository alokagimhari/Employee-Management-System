Employee Management System using Spring Boot, MySQL, JavaScript, AJAX, and HTML for managing employee users with basic CRUD (Create, Read, Update, Delete) functionality:

Project Overview
This project is a web-based employee management system that allows users to create, save, fetch, update, and delete employee records. It is built using Spring Boot for the backend, MySQL for the database, and JavaScript, AJAX, and HTML for the frontend.

Technologies Used:
Spring Boot: Provides the backend RESTful APIs and business logic.
MySQL: Stores employee records and other relevant data.
JavaScript and AJAX: Handles asynchronous data requests between the frontend and backend without page reloads.
HTML: Provides the user interface for managing employees.

Functionalities:


Create Employee:

The user can create a new employee by filling out a form with details such as name, email, and department.
Form data is sent to the server using AJAX via a POST request to a Spring Boot REST API endpoint.
The employee data is saved in the MySQL database.

Fetch Employee List:

Displays a list of employees fetched from the backend.
AJAX is used to make a GET request to fetch the data without reloading the page.
The employee data is dynamically rendered in an HTML table.

Update Employee:

The user can edit existing employee details by clicking an "Edit" button in the employee list.
A form is pre-filled with the employee's current data using AJAX.
The updated data is sent to the backend using a PUT request.

Delete Employee:

The user can delete an employee by clicking a "Delete" button.
An AJAX DELETE request is sent to the Spring Boot API to remove the employee from the MySQL database.
The employee is removed from the list dynamically without page reload.
