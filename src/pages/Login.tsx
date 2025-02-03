// src/pages/Login.tsx
import { useState } from 'react';

function Login(): JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add AWS Cognito login logic
    console.log(`Login with Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="max-w-sm mx-auto mt-8 p-4 bg-white shadow">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <div>
          <label className="block font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 w-full border p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700">Password</label>
          <input
            type="password"
            className="mt-1 w-full border p-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-purple-600 text-white p-2 rounded hover:bg-purple-700"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Login;