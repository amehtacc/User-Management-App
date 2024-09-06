import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchUsers, deleteUser } from '../api';
import UserForm from '../components/user_form';

const Home = () => {
  // State to hold the list of users
  const [users, setUsers] = useState([]);

  // State to hold the user currently being edited
  const [editingUser, setEditingUser] = useState(null);

  // State to handle any errors
  const [error, setError] = useState(null);

  // Fetch users from the API when the component mounts
  useEffect(() => {
    const getUsers = async () => {
      try {
        // Fetch users and update state
        const response = await fetchUsers();
        setUsers(response.data);
      } catch (err) {
        // Handle any errors
        setError('Failed to fetch users');
      }
    };
    getUsers();
  }, []); // Empty dependency array means this effect runs only once

  // Handle deleting a user
  const handleDelete = async (id) => {
    try {
      // Perform delete operation
      await deleteUser(id);
      // Update state to remove the deleted user
      setUsers(users.filter(user => user.id !== id));
    } catch (err) {
      // Handle any errors
      setError('Failed to delete user');
    }
  };

  return (
    <div>
      <h1>User Management App</h1>

      {/* Display error message if any */}
      {error && <p>{error}</p>}

      {/* Render UserForm component for creating/editing users */}
      <UserForm 
        editingUser={editingUser} 
        setEditingUser={setEditingUser} 
        setUsers={setUsers} 
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Render list of users */}
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td className='action-btn'>
                {/* Links and buttons for user actions */}
                <Link to={`/user/${user.id}`}>View</Link>
                <button onClick={() => setEditingUser(user)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
