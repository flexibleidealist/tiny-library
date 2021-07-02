import { baseURL, config } from "../services";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

function BookDetails(props) {
  const params = useParams();
  const history = useHistory();
  const bookToDisplay = props.books.find((book) => book.id === params.id);
  const deleteBook = async () => {
    const specificURL = `${baseURL}/tiny%20library%201/${bookToDisplay.id}`;
    await axios.delete(specificURL, config);
    props.setToggleFetch((curr)=> !curr);
    setTimeout(() => {
      history.push(`/library-catalogue/${bookToDisplay.fields.libraries}`);
    }, 800);
  }
  const backToCatalogue = () => {
      history.push(`/library-catalogue/${bookToDisplay.fields.libraries}`);
    }
  

  if (bookToDisplay) {
  return (
    <div >
      <section className="book-details">
        <h2 className="title">{bookToDisplay.fields.title}</h2>
        <h3>by {bookToDisplay.fields.author}</h3>
        <h4>Here's what a neighbor says about this book:</h4>
        <p>{bookToDisplay.fields.recommendation}</p>
      </section>
      <section id="details-button-section">
        <button onClick={backToCatalogue}>Back to Catalogue</button>
        <button onClick={deleteBook}>Take It!</button>
      </section>
    </div>
  )
  } else {
    return (
      <h2>loading...</h2>
    )
  }
}


export default BookDetails;