import { useState, useEffect  } from "react";
import { Link } from "react-router-dom";

function Book(props) {
  const [color, setColor] = useState("");
  useEffect(() => { 
    let initial = props.book.fields.author.charAt(0).toUpperCase();
    const colors = ["red", "black", "light-green", "blue", "red-brown", "light-blue", "green", "tan", "brown", "orange", "purple", "gray"];
    if (initial === "A" || initial === "B") { 
      setColor(colors[0]); 
    } else if (initial === "C" || initial === "D") {
      setColor(colors[1]);
    } else if (initial === "E" || initial === "F") {
      setColor(colors[2]);
    } else if (initial === "G" || initial === "H") {
      setColor(colors[3]);
    } else if (initial === "I" || initial === "J") {
      setColor(colors[4]);
    } else if (initial === "K" || initial === "L") {
      setColor(colors[5]);
    } else if (initial === "M" || initial ===  "N") {
      setColor(colors[6]);
    } else if (initial === "O" || initial === "P") {
      setColor(colors[7]);
    } else if (initial === "Q" || initial === "R") {
      setColor(colors[8]);
    } else if (initial === "S" || initial === "T") {
      setColor(colors[9]);
    } else if (initial === "U" || initial === "V") {
      setColor(colors[10]);
    } else if (initial === "W" || initial === "X" || initial === "Y" || initial === "Z") {
      setColor(colors[11]);
    } else { setColor(colors[9]);
    } 
  },[props.book.fields.author]);
  
  // render each book on the catalogue display, showing title, author info
  // clickable link to details page for that particular book
  return (
   <Link to={`/book/${props.book.id}`}>
     <div  className={`book ${color}`}>
        <h3 className="title">{props.book.fields.title}</h3>
        <h4 className="author">{props.book.fields.author}</h4>
      </div>
    </Link> 
  )
}

export default Book;