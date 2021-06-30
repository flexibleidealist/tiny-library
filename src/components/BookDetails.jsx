import { baseURL, config } from "../services";
import axios from "axios";
import { useParams } from "react-router-dom";

function BookDetails(props) {
  const params = useParams();
  const specificURL = `${baseURL}/book/${book.id}`;
  const displayDetails = () => {
    const bookToDisplay = props.books.find((book)=> book.id === useParams.id);
  }
  const deleteBook = async () => {
    await axios.delete(specificURL, config);
  }
  //return details (title, author, recommendations) via axios request to specific URL determined by the id of the particular book from props, which we get from searching through props.books for a match
  //Take It! button uses axios request to delete request on button click
  // send user to library catalogue page on delete
  return (
    <div className="book-details">
      <h2 className="title">{bookToDisplay.title}</h2>
      <h3>{bookToDisplay.author}</h3>
      <p>{bookToDisplay.recommendation}</p>
      <button onClick={deleteBook}>Take It!</button>
    </div>
  )
}

export default BookDetails;