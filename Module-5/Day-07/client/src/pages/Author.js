import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import AuthorModal from "../components/AuthorModal";

function Authors() {
  const [authors, setAuthors] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  const [authorDetails, setAuthorDetails] = useState();

  useEffect(() => {
    getAuthors();
  }, []);

  const getAuthors = async () => {
    const { data } = await axios.get("http://localhost:5001/authors");
    setAuthors(data);
  };

  const handleModalClose = () => {
    setIsCreating(false);
    setAuthorDetails(undefined);
  };

  const saveAuthor = async (author) => {
    const { data } = await axios.post("http://localhost:5001/authors", author);
    console.log(data);
    setAuthors((prevValue) => [...prevValue, data]);
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p> authors page!</p>
        <Button onClick={() => setIsCreating(true)}>Create Author</Button>
        {authors.map((author) => (
          <Link to={`/authors/${author._id}`}>
            {author.firstName} {author.lastName}
          </Link>
        ))}
      </div>
      <AuthorModal
        isCreating={isCreating}
        authorDetails={authorDetails}
        onClose={handleModalClose}
        onSubmit={saveAuthor}
      />
    </>
  );
}

export default Authors;
