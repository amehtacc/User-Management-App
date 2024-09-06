import axios from 'axios';

// Base URL for the JSONPlaceholder API
const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Function to fetch users from the API
export const fetchUsers = () => axios.get(API_URL);

// Function to create a new user (simulated)
export const createUser = (user) => axios.post(API_URL, user);

// Function to update an existing user (simulated)
export const updateUser = (id, user) => axios.put(`${API_URL}/${id}`, user);

// Function to delete a user (simulated)
export const deleteUser = (id) => axios.delete(`${API_URL}/${id}`);
