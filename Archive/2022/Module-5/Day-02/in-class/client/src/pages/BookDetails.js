import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffectOnce } from "react-use";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";

function BookDetails() {
  const [bookDetails, setBookDetails] = useState();
  const [showEditModal, setShowEditModal] = useState(false);
  let { id } = useParams();

  useEffectOnce(() => {
    getBookDetails();
  });

  const getBookDetails = async () => {
    const { data } = await axios.get(`http://localhost:5001/books/${id}`);
    setBookDetails(data);
  };

  const handleClose = () => {
    setShowEditModal(false);
  };

  const handleSubmit = async () => {
    const { data } = await axios.put(
      `http://localhost:5001/books/mark-reading/${id}`
    );
    setBookDetails(data);
  };

  return (
    <>
      <Button onClick={handleSubmit}>Mark Reading</Button>
      <div>{JSON.stringify(bookDetails)}</div>
      {/* <Modal show={showEditModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Books</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
}

export default BookDetails;
