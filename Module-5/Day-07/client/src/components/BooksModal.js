import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const defaultBookValues = {
  title: "",
  author: "",
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

  const createAuthorOptions = () => {
    return authors.map(({ _id, firstName, lastName }) => (
      <option value={_id}>
        {firstName} {lastName}
      </option>
    ));
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{bookDetails?.id ? "Edit" : "Add"} Author</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              onChange={(e) =>
                setBookForm({ ...bookForm, title: e.target.value })
              }
              value={bookForm.title}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Author</Form.Label>
            <Form.Select
              onChange={(e) =>
                setBookForm({ ...bookForm, author: e.target.value })
              }
              value={bookForm.author}
            >
              <option>Open this select menu</option>
              {createAuthorOptions()}
            </Form.Select>
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
