import { Link } from "react-router-dom";
function Library(props) {
  return (
    <div className="library">
      <h2>{props.library.fields.location}</h2>
      <Link to={`/library-catalogue/${props.library.id}`}>
        <h2>Catalogue</h2>
      </Link>
    </div>
  )
}

export default Library;