import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const defaultBookValues = {
  title: "",
  lastName: "",
  age: 18,
};

const BookModal = ({ bookDetails, onSubmit, onClose, isCreating, authors }) => {
  const [bookForm, setBookForm] = useState({
    ...defaultBookValues,
    ...bookDetails,
  });

  const show = isCreating || bookDetails;

  const handleClose = () => {
    onClose();
    setBookForm(defaultBookValues);
  };

  const handleSubmit = async () => {
    onSubmit(bookForm);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{bookDetails?.id ? "Edit" : "Add"} Author</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              onChange={(e) =>
                setBookForm({ ...bookForm, firstName: e.target.value })
              }
              value={bookForm.firstName}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              onChange={(e) =>
                setBookForm({ ...bookForm, lastName: e.target.value })
              }
              value={bookForm.lastName}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              placeholder="Age"
              onChange={(e) =>
                setBookForm({ ...bookForm, age: e.target.value })
              }
              value={bookForm.age}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Author
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BookModal;
