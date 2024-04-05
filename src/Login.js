import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Add your authentication logic here
    onLogin(username);
    // Navigate to the home page 
    navigate('/');
  };

  return (
    <Container className="mt-5">
      <h2>Login</h2>
      <Form>
        <Form.Group>
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleLogin}>
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
