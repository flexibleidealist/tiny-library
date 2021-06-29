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
    <section className="catalogue">
    {books.map((book)=> (
      <div className="book" key={book.id}>
        <h3 className="title">{book.fields.title}</h3>
        <h4 className="author">{book.fields.author}</h4>
      </div>))}
    </section>
    
  
  )
}

export default Catalogue;