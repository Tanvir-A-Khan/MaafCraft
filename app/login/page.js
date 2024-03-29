"use client"
import React, { useState } from 'react';
import Link from "next/link";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({

    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    // Add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg my-6 mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-6 uppercase ">Log in to your account</h2>
      <hr/>
      <br/>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-xs">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:border-blue-500" required />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 text-xs">Password</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:border-blue-500" required />
      </div>
      <p className='text-xs my-4'>Already have an account? <Link href="/registration">Login Here</Link></p>
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">Login</button>
    </form>
  );
};

export default RegistrationForm;
