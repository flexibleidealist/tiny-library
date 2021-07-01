import Book from "./Book";
import { useParams } from "react-router-dom";

function Catalogue(props) {
  const params = useParams();
  const localBooks = props.books.filter((book) => book.fields.libraries[0] === params.id);
  return (
    <div>
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