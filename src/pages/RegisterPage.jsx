import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../api';

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  function handleSubmit() {
    register(username, password)
      .then(() => {
        setSuccess(true);
        setTimeout(() => navigate('/login'), 1500);
      })
      .catch(() => {
        setError('Registration failed. Username may already be taken.');
      });
  }

  return (
    <div>
      <h1>Register</h1>
      {success ? (
        <p>Account created! Redirecting to login...</p>
      ) : (
        <>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button onClick={handleSubmit}>Register</button>
          {error && <p className="error-message">{error}</p>}
        </>
      )}
    </div>
  );
}

export default RegisterPage;