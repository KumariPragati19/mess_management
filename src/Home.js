import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, Form, Button } from 'react-bootstrap';

const Home = ({ onRegistration }) => {
  const navigate = useNavigate();

  const [menuItems] = useState([
    { id: 1, dish: 'Butter Chicken', cuisine: 'Indian', price: 90.00 },
    { id: 2, dish: 'Chicken Tikka Masala', cuisine: 'Indian', price: 100.00 },
    { id: 3, dish: 'Paneer Butter Masala', cuisine: 'Indian', price: 60.00 },
    { id: 4, dish: 'Spaghetti Bolognese', cuisine: 'Italian', price: 50.00},
    { id: 5, dish: 'Chicken Alfredo', cuisine: 'Italian', price: 200.00 },
    { id: 6, dish: 'Margherita Pizza', cuisine: 'Italian', price: 75.00 },
    { id: 7, dish: 'Caesar Salad', cuisine: 'Italian', price: 80.00 },
    { id: 8, dish: 'Grilled Salmon', cuisine: 'International', price: 40.00 },
  ]);

  const [registration, setRegistration] = useState({
    name: '',
    subscriptionType: '',
  });

  const handleRegistration = () => {
    onRegistration(registration);
    navigate('/subscription');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegistration((prevRegistration) => ({
      ...prevRegistration,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Menu</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Dish</th>
            <th>Cuisine</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.dish}</td>
              <td>{item.cuisine}</td>
              <td>Rs. {item.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h2>Register for Subscription</h2>
      <Form>
        <Form.Group controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={registration.name}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="subscriptionType">
          <Form.Label>Select Subscription Type:</Form.Label>
          <Form.Control
            as="select"
            name="subscriptionType"
            value={registration.subscriptionType}
            onChange={handleInputChange}
          >
            <option value="">Select...</option>
            <option value="thali">Thali</option>
            <option value="prepaid">Prepaid</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" onClick={handleRegistration}>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Home;
