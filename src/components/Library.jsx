import { Link } from "react-router-dom";
function Library(props) {
  return (
    <Link to={`/library-catalogue/${props.library.id}`}>
      <div className="library">
        <h2>{props.library.fields.location}</h2>
      </div>
    </Link>
  )
}

export default Library;