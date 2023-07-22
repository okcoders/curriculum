import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const defaultAuthorValues = {
  firstName: "",
  lastName: "",
  age: 18,
};

const AuthorModal = ({ authorDetails, onSubmit, onClose, isCreating }) => {
  const [authorForm, setAuthorForm] = useState({
    ...defaultAuthorValues,
    ...authorDetails,
  });

  const show = isCreating || authorDetails;

  const handleClose = () => {
    onClose();
    setAuthorForm(defaultAuthorValues);
  };

  const handleSubmit = async () => {
    onSubmit(authorForm);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{authorDetails?.id ? "Edit" : "Add"} Author</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              onChange={(e) =>
                setAuthorForm({ ...authorForm, firstName: e.target.value })
              }
              value={authorForm.firstName}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              onChange={(e) =>
                setAuthorForm({ ...authorForm, lastName: e.target.value })
              }
              value={authorForm.lastName}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              placeholder="Age"
              onChange={(e) =>
                setAuthorForm({ ...authorForm, age: e.target.value })
              }
              value={authorForm.age}
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

export default AuthorModal;
