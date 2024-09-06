import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchUsers } from '../api';

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetchUsers();
        setUser(response.data.find(u => u.id === parseInt(id)));
      } catch (err) {
        setError('Failed to fetch user details');
      }
    };
    getUser();
  }, [id]);

  if (error) return <p>{error}</p>;

  return (
    <div>
      {user ? (
        <div>
          <h1>{user.name}</h1>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <Link to="/">Back to Users List</Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserDetail;
