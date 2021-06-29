import { useState } from "react";
import { baseURL, config } from "../services";
import axios from "axios";

function AddForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [recommendation, setRecommendation] = useState("");
  // return input form for Title, Author, and Recommendation
  // axios post request to add record of book donated
  // useEffect to update catalogue
  // success alert and send user back to updated catalogue page

    const addBook = async (e) => {
      e.preventDefault();
      const newBook = {
        title,
        author,
      }
      await axios.post(baseURL, { fields:  newBook }, config)
    }
  
  return (
    <form onSubmit={addBook}>
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
      <button type="submit">Leave it!</button>
    </form>
  )
}

export default AddForm;