import Book from "./Book";

function Catalogue(props) {
  
  return (
    <section className="catalogue">
    {props.books.map((book)=> (
      <Book key={book.id} book={book} />
    ))}
    </section>
    
  )
}

export default Catalogue;