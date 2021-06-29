import axios from "axios";

function BookDetails(props) {
  //return details (title, author, recommendations) via axios request to specific URL determined by the id of the particular book from props, which we get from searching through props.books for a match
  //Take It! button uses axios request to delete request on button click
  // send user to library catalogue page on delete
  return (
    <div className="book-details">
      <h2 className="title">book title here</h2>
      <h3>author name here</h3>
      <button>Take It!</button>
    </div>
  )
}

export default BookDetails;