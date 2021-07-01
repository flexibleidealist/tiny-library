import Book from "./Book";

function Catalogue(props) {
  
  return (
    <div>
      <h2 id="catalogue-text" >Here are the books currently in this library: </h2>
      <section className="catalogue">
        {props.books.map((book)=> (
        <Book key={book.id} book={book} />
        ))}
      </section>
    </div>
    
  )
}

export default Catalogue;