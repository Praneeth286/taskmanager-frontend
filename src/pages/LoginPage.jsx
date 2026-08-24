import { useState } from 'react';
import {useNavigate, Link} from 'react-router-dom';
import {login} from '../api';
import {useAuth} from '../AuthContext';
function LoginPage(){
    const [username, setUsername]=useState('');
    const [password,setPassword]=useState('');
      const [error, setError] = useState('');
      const { loginUser } = useAuth();
      const navigate = useNavigate();

      function handleSubmit() {
        login(username, password)
          .then(token => {
            loginUser(token);
            navigate('/');
          })
          .catch(() => {
            setError('Invalid username or password');
          });
      }

      return (
        <div>
          <h1>Login</h1>
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
          <button onClick={handleSubmit}>Log In</button>
          {error && <p className="error-message">{error}</p>}
          <p>Don't have an account? <Link to="/register">Register here</Link></p>
        </div>
      );
    }

    export default LoginPage;




