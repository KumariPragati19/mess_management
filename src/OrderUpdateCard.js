import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const OrderUpdateCard = ({ isUpdating, meals, onHide, onSaveUpdates }) => {
  const [newMeal, setNewMeal] = React.useState('');

  const handleAddMeal = () => {
    // const handleInputChange = (e) => {
    // const { name, value } = e.target;
    //   setRegistration((prevRegistration) => ({
    //     ...prevRegistration,
    //     [name]: value,
    //   }));
    // };
    setNewMeal('');
  };

  const handleRemoveMeal = (index) => {
    // Remove the meal 
  };

  return (
    <Modal show={isUpdating} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Update Orders</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="newMeal">
            <Form.Label>New Meal:</Form.Label>
            <Form.Control
              type="text"
              value={newMeal}
              onChange={(e) => setNewMeal(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" onClick={handleAddMeal}>
            Add Meal
          </Button>
          {meals.length > 0 && (
            <ul>
              {meals.map((meal, index) => (
                <li key={index}>
                  {meal}{' '}
                  <Button variant="danger" size="sm" onClick={() => handleRemoveMeal(index)}>
                    Remove
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={onSaveUpdates}>
          Save Updates
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OrderUpdateCard;
