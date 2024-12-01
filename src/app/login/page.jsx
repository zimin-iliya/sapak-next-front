"use client";

import { login, signup } from './actions';

export default function LoginPage() {
  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    await login(formData);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    await signup(formData);
  };

  return (
    <form className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md" onSubmit={handleLogin}>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
        <input 
          id="email" 
          name="email" 
          type="email" 
          required 
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
        <input 
          id="password" 
          name="password" 
          type="password" 
          required 
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
        />
      </div>
      <div className="flex items-center justify-between">
        <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Log in</button>
        <button type="button" onClick={handleSignup} className="w-full py-2 px-4 ml-4 bg-gray-600 text-white font-semibold rounded-md shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">Sign up</button>
      </div>
    </form>
  );
}