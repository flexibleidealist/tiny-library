import { useState } from "react";
import { useHistory } from "react-router-dom";
import { baseURL, config } from "../services";
import axios from "axios";

function AddForm(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const history = useHistory();
  // return input form for Title, Author, and Recommendation
  // axios post request to add record of book donated
  // useEffect to update catalogue
  // success alert and send user back to updated catalogue page

    const addBook = async (e) => {
      e.preventDefault();
      const newBook = {
        title,
        author,
        recommendation,
      }
      await axios.post(baseURL, { fields:  newBook }, config);
      props.setToggleFetch((curr)=>!curr);
      setTimeout(() => {
        history.push("/library-catalogue");
      }, 800);
    }
  
  return (
    <form className="add-form" onSubmit={addBook}>
      <label htmlFor="title-input">Title: </label>
      <input 
        type="text" 
        placeholder="enter title" 
        required 
        id="title-input"
        value={title} onChange={(e)=> setTitle(e.target.value) }
      />
      <label htmlFor="author-input">Author: </label>
      <input 
        type="text" 
        placeholder="enter author's name" 
        required 
        id="title-input" 
        value={author}
        onChange={(e)=>setAuthor(e.target.value)}
      />
      <label htmlFor="recommendation">Recommendation: </label>
      <textarea 
        id="recommendation"
        placeholder="tell your neighbors why they might like this book! (optional)" 
        value={recommendation}
        onChange={(e)=> setRecommendation(e.target.value)}
      />
      <section id="leave-it-button-section">
      <button type="submit">Leave it!</button>
      </section>
    </form>
  )
}

export default AddForm;