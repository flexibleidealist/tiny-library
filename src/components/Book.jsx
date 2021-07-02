import { useState, useEffect  } from "react";
import { Link } from "react-router-dom";

function Book(props) {
  const [color, setColor] = useState("");
  let initial = props.book.fields.author.charAt(0).toUpperCase();

  useEffect(() => { 
    const colors = ["red", "orange", "light-green", "tan", "red-brown", "light-blue", "green", "blue", "brown", "black", "purple", "gray"];
    if (initial === "A" || "B") { 
      setColor(colors[0]); 
    } else if (initial === "C" || "D") {
      setColor(colors[1]);
    } else if (initial === "E" || "F") {
      setColor(colors[2]);
    } else if (initial === "G" || "H") {
      setColor(colors[3]);
    } else if (initial === "I" || "J") {
      setColor(colors[4]);
    } else if (initial === "K" || "L") {
      setColor(colors[5]);
    } else if (initial === "M" || "N") {
      setColor(colors[6]);
    } else if (initial === "O" || "P") {
      setColor(colors[7]);
    } else if (initial === "Q" || "R") {
      setColor(colors[8]);
    } else if (initial === "S" || "T") {
      setColor(colors[9]);
    } else if (initial === "U" || "V") {
      setColor(colors[10]);
    } else if (initial === "W" || "X" || "Y" || "Z") {
      setColor(colors[11]);
    } else { setColor(colors[6]);
    } 
  }, [initial]);
  
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