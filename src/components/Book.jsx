import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Book(props) {
  const [color, setColor] = useState("");
  
  useEffect(() => { 
    const colors = ["green", "light-green", "tan", "red-brown", "light-blue", "black", "blue", "brown", "red", "purple", "gray"]
    const randomIndex = Math.floor(Math.random() * colors.length);
    setColor(colors[randomIndex]);
  }, [])
  
    
  
  
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