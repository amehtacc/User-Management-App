import { useState, useEffect } from 'react';
import { createUser, updateUser } from '../api';

const UserForm = ({ editingUser, setEditingUser, setUsers }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingUser) {
        await updateUser(editingUser.id, formData);
        setUsers(prevUsers => prevUsers.map(user => user.id === editingUser.id ? formData : user));
      } else {
        await createUser(formData);
        setUsers(prevUsers => [...prevUsers, formData]);
      }
      setEditingUser(null);
    } catch (err) {
      console.error('Failed to save user');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
      {editingUser && <button className='create-cancel' onClick={() => setEditingUser(null)}>Cancel</button>}
    </form>
  );
};

export default UserForm;
