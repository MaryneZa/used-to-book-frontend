"use client";
import { userLogin } from '@/src/services/auth'; // Adjust the path accordingly
import { FormEvent, useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
        const userData = await userLogin({ email, password });
        console.log(userData); // Handle successful login response
        // Redirect user or perform other actions after successful login
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error logging in:', error.message); // Handle login error
            // Display error message to the user or perform other error handling
        } else {
            console.error('Error logging in:', error); // Fallback handling for unknown errors
        }
    }
};


  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input className='text-red-900'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
