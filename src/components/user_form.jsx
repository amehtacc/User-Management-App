import { useState, useEffect } from 'react';
import { createUser, updateUser } from '../api';

const UserForm = ({ editingUser, setEditingUser, setUsers }) => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  // Update form data when editingUser changes
  useEffect(() => {
    if (editingUser) {
      setFormData(editingUser);
    } else {
      setFormData({
        name: '',
        email: '',
        phone: ''
      });
    }
  }, [editingUser]);

  // Handle changes in form inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      if (editingUser) {
        // Update existing user
        await updateUser(editingUser.id, formData);
        // Update users list
        setUsers(prevUsers => prevUsers.map(user => user.id === editingUser.id ? formData : user));
      } else {
        // Create new user
        await createUser(formData);
        // Add new user to users list
        setUsers(prevUsers => [...prevUsers, formData]);
      }
      // Clear the editing user state
      setEditingUser(null);
    } catch (err) {
      console.error('Failed to save user');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields for user data */}
      <input 
        type="text" 
        name="name" 
        value={formData.name} 
        onChange={handleChange} 
        placeholder="Name" 
        required 
      />
      <input 
        type="email" 
        name="email" 
        value={formData.email} 
        onChange={handleChange} 
        placeholder="Email" 
        required 
      />
      <input 
        type="tel" 
        name="phone" 
        value={formData.phone} 
        onChange={handleChange} 
        placeholder="Phone" 
        required 
      />
      <button className='create-cancel' type="submit">{editingUser ? 'Update' : 'Create'} User</button>

      {/* Cancel button for editing mode */}
      {editingUser && <button className='create-cancel' onClick={() => setEditingUser(null)}>Cancel</button>}
    </form>
  );
};

export default UserForm;
