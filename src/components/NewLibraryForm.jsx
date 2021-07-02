import { useState } from "react";
import { useHistory } from "react-router-dom";
import { baseURL, config } from "../services";
import axios from "axios";

function NewLibraryForm(props) {
  const [maintainer, setMaintainer] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const history = useHistory();

  const addNewLibrary = async (e) => {
    e.preventDefault();
    const newLibrary = {
      location,
      maintainer,
      address,
    }

    await axios.post(`${baseURL}/libraries`, { fields: newLibrary }, config);
    props.setToggleFetch((curr)=>!curr);
    setTimeout(() => {
      history.push("/");
    }, 800)
  }

  return (
    <form className="new-library-form" onSubmit={addNewLibrary}>
      <label htmlFor="name">Name: </label>
      <input 
      type="text" 
      id="name"
      placeholder="enter your name"
      required
      value={maintainer}
      onChange={(e)=>setMaintainer(e.target.value)}
      />
      <label htmlFor="location">Location: </label>
      <input 
      type="text"
      id="location"
      required
      placeholder="enter number and street name"
      value={location} 
      onChange={(e)=>setLocation(e.target.value)}
      />
      <label htmlFor="address">Location: </label>
      <input 
      type="text"
      id="address"
      placeholder="enter zip code"
      required
      value={address} 
      onChange={(e)=>setAddress(e.target.value)}
      />
      <section className="leave-it-button-section">
        <button id="new-library-button" onClick={addNewLibrary}>Add Library!</button>
      </section>
    </form>
  )
}

export default NewLibraryForm;