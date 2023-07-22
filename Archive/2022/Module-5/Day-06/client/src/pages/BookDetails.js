import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffectOnce } from "react-use";
import { Button, Form, Modal } from "react-bootstrap";
import axios from "axios";

function BookDetails() {
  const [bookDetails, setBookDetails] = useState();
  const [bookForm, setBookForm] = useState();
  const [showEditModal, setShowEditModal] = useState(false);
  let { id } = useParams();

  useEffectOnce(() => {
    getBookDetails();
  });

  const getBookDetails = async () => {
    const { data } = await axios.get(`http://localhost:5001/books/${id}`);
    setBookDetails(data);
    setBookForm(data);
  };

  const handleClose = () => {
    setShowEditModal(false);
    setBookForm(bookDetails);
  };

  const handleSubmit = async () => {
    const { data } = await axios.put(
      `http://localhost:5001/books/${id}`,
      bookForm
    );
    setBookDetails(data);
    setBookForm(data);
    setShowEditModal(false);
  };

  return (
    <>
      <Button onClick={() => setShowEditModal(true)}>Edit Book</Button>
      <Modal show={showEditModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Books</Modal.Title>
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
                value={bookForm?.title}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="Author"
                onChange={(e) =>
                  setBookForm({ ...bookForm, author: e.target.value })
                }
                value={bookForm?.author}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Subtitle</Form.Label>
              <Form.Control
                type="text"
                placeholder="Subtitle"
                onChange={(e) =>
                  setBookForm({ ...bookForm, subtitle: e.target.value })
                }
                value={bookForm?.subtitle}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Pages</Form.Label>
              <Form.Control
                type="text"
                placeholder="Pages"
                onChange={(e) =>
                  setBookForm({ ...bookForm, pages: e.target.value })
                }
                value={bookForm?.pages}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Book
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BookDetails;
