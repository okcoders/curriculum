import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const { data } = await axios.get("http://localhost:5001/books");
    setBooks(data);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {books.map((book) => (
        <Link to={`/${book._id}`}>{book.title}</Link>
      ))}
    </div>
  );
}

export default Books;
