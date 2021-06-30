
function Book(props) {
  console.log(props);
  // render each book on the catalogue display, showing title, author info
  // clickable link to details page for that particular book
  return (
    <div className="book" >
        <h3 className="title">{props.book.fields.title}</h3>
        <h4 className="author">{props.book.fields.author}</h4>
    </div>
  )
}

export default Book;