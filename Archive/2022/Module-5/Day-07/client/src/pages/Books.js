import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BookModal from "../components/BooksModal";
import { Button } from "react-bootstrap";

function Books() {
  const [books, setBooks] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getBooks();
    getAuthors();
  }, []);

  const getAuthors = async () => {
    const { data } = await axios.get("http://localhost:5001/authors");
    setAuthors(data);
  };

  const getBooks = async () => {
    const { data } = await axios.get("http://localhost:5001/books");
    setBooks(data);
  };

  const handleModalClose = () => {
    setIsCreating(false);
  };

  const saveBook = async (book) => {
    const { data } = await axios.post("http://localhost:5001/books", book);
    setBooks((prevValue) => [...prevValue, data]);
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p> hello</p>
        <Button onClick={() => setIsCreating(true)}>Create Book</Button>
        {books.map((book) => (
          <Link to={`/${book._id}`}>{book.title}</Link>
        ))}
      </div>
      <BookModal
        isCreating={isCreating}
        onClose={handleModalClose}
        onSubmit={saveBook}
        authors={authors}
      />
    </>
  );
}

export default Books;
