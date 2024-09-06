import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchUsers } from '../api';

const UserDetail = () => {
   // Get user ID from URL parameters
  const { id } = useParams();

  // State to hold user data
  const [user, setUser] = useState(null);

  // State to handle errors
  const [error, setError] = useState(null);

  // Fetch user details when component mounts
  useEffect(() => {
    const getUser = async () => {
      try {
        // Fetch users and find the specific user by ID
        const response = await fetchUsers();
        setUser(response.data.find(u => u.id === parseInt(id)));
      } catch (err) {
        // Handle any errors
        setError('Failed to fetch user details');
      }
    };
    getUser();
  }, [id]); // Dependency array includes ID so effect runs when ID changes

  if (error) return <p>{error}</p>;

  return (
    <div>
      {/* Display user details if available */}
      {user ? (
        <div>
          <h1>{user.name}</h1>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>

          {/* Link to go back to the user list */}
          <Link to="/">Back to Users List</Link>
        </div>
      ) : (
        <p>Loading...</p>  // Show loading message while user data is being fetched
      )}
    </div>
  );
};

export default UserDetail;
