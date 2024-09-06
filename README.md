# User Management Application

This project is a simple User Management Application built using React, designed to perform CRUD (Create, Read, Update, Delete) operations on a list of users. It uses the JSONPlaceholder API, a free fake online REST API, to simulate backend operations.

## Screenshot
<img src="src\assets\User Management App.jpg" alt="User Management App" style = "border: 4px solid rgb(0, 255, 0);">

## Table of Contents
- [Features](#features)
- [Live Project](#live-project)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Components Overview](#components-overview)
- [Usage](#usage)

## Features
- Fetch Users: Displays a list of users fetched from the JSONPlaceholder API.
- Create User: Add a new user with a form and simulate the creation via a POST request.
- Update User: Edit existing users with a form and simulate the update via a PUT request.
- Delete User: Delete users with a button click, simulating the deletion via a DELETE request.
- Detailed View: View detailed information about each user on a separate page.
- Responsive Design: Ensures the app looks good on both desktop and mobile devices.
- Error Handling: Proper error messages are shown for failed API requests.
- Navigation: Uses react-router-dom for navigation between different views.

## Live Project
Here's a live demo link: 

## Technologies Used
- React: For building the user interface with functional components and hooks.
- Axios: For making HTTP requests to the API.
- React Router DOM: For client-side routing and navigation between pages.
- CSS: For styling and ensuring responsive design.

## Getting Started
Follow these instructions to get a copy of the project and running on your local machine for development and testing purposes.

### 1. Prerequisites
Ensure you have the following installed on your system:

- Node.js
- npm (Node Package Manager) or yarn

### 2. Installation
1. Clone the repository:
```
git clone https://github.com/amehtacc/User-Management-App
cd User-Management-App
```
2. Install dependencies:
```
npm install
```
3. To start the application:
```
npm run dev
```

## API Endpoints
The application interacts with the following endpoints of the JSONPlaceholder API:

- GET /users: Fetches the list of users.
- POST /users: creating a new user.
- PUT /users/
: updating an existing user.
- DELETE /users/
: deleting a user.

## Components Overview
- Home.js: Displays the list of users and provides options to create, edit, and delete users.
- UserForm.js: A form component for creating new users or editing existing ones.
- UserDetail.js: Displays detailed information about a specific user.
- api.js: Contains functions for making HTTP requests to the JSONPlaceholder API using Axios.

## Usage
1. View Users: Visit the homepage to see a list of users.
2. Create User: Click on the "Create User" button, fill in the form, and submit to add a new user.
3. Edit User: Click on the "Edit" button next to a user, modify the details in the form, and submit to update the user.
4. Delete User: Click the "Delete" button to remove a user from the list.
5. View User Details: Click the "View" link to see more details about a user.

## Contact
For any questions or feedback, feel free to contact me.
