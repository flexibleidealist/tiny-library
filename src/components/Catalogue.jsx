import { useState, useEffect } from "react";
import axios from "axios";
import Book from "./Book";
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
      <Book key={books.id} book={book} />
    ))}
    </section>
    
  
  )
}

export default Catalogue;