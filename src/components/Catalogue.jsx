import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL, config } from "../services";

function Catalogue() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const resp = await axios.get(baseURL, config);
      setBooks(resp.data.records);
    }
    fetchBooks();
  }, []);

  return (
    books.map((book)=> (
    <div className="book" key={book.id}>
      <h3 className="title">{book.fields.title}</h3>
      <h2 className="author">{book.fields.author}</h2>
    </div>
    )
    )
  )
}

export default Catalogue;