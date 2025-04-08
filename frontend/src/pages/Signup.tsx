import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    idNumber: '',
    phone: '',
    regNo: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFeedback('');

    try {
      await axios.post('http://localhost:5000/api/auth/register', formData);
      setFeedback(' Account created successfully! Redirecting to login...');
      setTimeout(() => navigate('/login'), 1500);
    } catch (error: any) {
      setFeedback(error?.response?.data?.message || ' Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-yellow-400 flex items-center justify-center bg-cover bg-center">
      <div className="bg-white bg-opacity-95 rounded-2xl shadow-2xl p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-yellow-500 mb-6">Create Ajira Account</h2>
        {feedback && (
          <div className={`text-sm text-center mb-4 font-semibold ${feedback.includes('✅') ? 'text-green-600' : 'text-red-600'}`}>
            {feedback}
          </div>
        )}
        <form onSubmit={handleRegister} className="space-y-4">
          <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400" />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400" />
          <input type="text" name="idNumber" placeholder="ID Number" onChange={handleChange} required className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400" />
          <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} required className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400" />
          <input type="text" name="regNo" placeholder="Registration Number" onChange={handleChange} required className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400" />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400" />
          <button type="submit" disabled={loading} className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition font-semibold">
            {loading ? 'Creating...' : 'Register'}
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Already a member? <a href="/login" className="text-yellow-600 font-semibold hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
