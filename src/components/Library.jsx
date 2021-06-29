import { Link } from "react-router-dom";
function Library() {
  return (
    <div className="library">
      <h3>Location</h3>
      <Link to="/library-catalogue">
        <h3>Catalogue</h3>
      </Link>
    </div>
  )
}

export default Library;