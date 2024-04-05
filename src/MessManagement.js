import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import OrderUpdateCard from './OrderUpdateCard'; 

const MessManagement = ({ username, registeredUsers }) => {
  const [dailyThaliCount, setDailyThaliCount] = useState(0);
  const [prepaidMealCount, setPrepaidMealCount] = useState(0);
  const [newMeal, setNewMeal] = useState('');
  const [meals, setMeals] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);

  const addMeal = () => {
    setMeals([...meals, newMeal]);
    setNewMeal('');
  };

  const removeMeal = (index) => {
    const updatedMeals = [...meals];
    updatedMeals.splice(index, 1);
    setMeals(updatedMeals);
  };

  const handleUpdateOrders = () => {
    setIsUpdating(true);
  };

  const handleSaveUpdates = () => {
    // Add logic to save updates 
    setIsUpdating(false);
  };

  const handleCloseUpdateCard = () => {
    setIsUpdating(false);
  };

  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <Button variant="success" onClick={handleUpdateOrders}>
            Take Today's Order
          </Button>
        </Col>
      </Row>

      <h2 className="mt-4">Registered Users</h2>
      {registeredUsers?.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Subscription Type</th>
            </tr>
          </thead>
          <tbody>
            {registeredUsers.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.subscriptionType}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>No registered users yet.</p>
      )}
      <OrderUpdateCard
        isUpdating={isUpdating}
        meals={meals}
        onHide={handleCloseUpdateCard}
        onSaveUpdates={handleSaveUpdates}
      />
    </Container>
  );
};

export default MessManagement;
