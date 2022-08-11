import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffectOnce } from "react-use";
import axios from "axios";

function AuthorDetails() {
  const [authorDetails, setAuthorDetails] = useState();
  let { id } = useParams();

  useEffectOnce(() => {
    getAuthorDetails();
  });

  const getAuthorDetails = async () => {
    const { data } = await axios.get(`http://localhost:5001/authors/${id}`);
    setAuthorDetails(data);
  };

  console.log(authorDetails);

  return (
    <>
      {authorDetails?.books.map((book) => (
        <Link to={`/${book._id}`}>{book.title}</Link>
      ))}
    </>
  );
}

export default AuthorDetails;
