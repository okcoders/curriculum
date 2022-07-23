import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const { data } = await axios.get("http://localhost:5001/books");
    setBooks(data);
  };

  useEffect(() => {
    getBooks();
  }, []);

  console.log(books);

  return (
    <div className="App">
      {books.map(({ id, title, author }, i) => (
        <div key={id + i}>
          {title} - {author}
        </div>
      ))}
    </div>
  );
}

export default App;
