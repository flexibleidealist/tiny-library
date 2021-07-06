import Book from "./Book";
import { Link, useParams } from "react-router-dom";
import { sortByCreatedTime } from "../services"

function Catalogue(props) {
  const params = useParams();
  const localBooks = props.books.filter((book) => book.fields.libraries[0] === params.id);
  sortByCreatedTime(localBooks);
  return (
    <div>
      <section id="leave-a-book-button-section">
      <Link to={`/add/${params.id}`}>
        <button id="leave-a-book-button">Leave a Book!</button>
      </Link>
      </section>
      <h2 id="catalogue-text" >Here are the books currently in this library: </h2>
      <section className="catalogue">
        {
        localBooks.map((book)=> (
        <Book key={book.id} book={book} />
        ))}
      </section>
    </div>
    
  )
}

export default Catalogue;