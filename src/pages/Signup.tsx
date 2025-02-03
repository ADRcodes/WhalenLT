import { useState } from 'react';

function Signup(): JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add AWS Cognito sign-up logic
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log(`Sign up with Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="max-w-sm mx-auto mt-8 p-4 bg-white shadow">
      <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
      <form onSubmit={handleSignup} className="flex flex-col gap-4">
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
        <div>
          <label className="block font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            className="mt-1 w-full border p-2 rounded"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-purple-600 text-white p-2 rounded hover:bg-purple-700"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
