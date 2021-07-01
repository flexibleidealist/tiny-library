import { Link } from "react-router-dom";
function Library() {
  return (
    <div className="library">
      <h2>Location</h2>
      <Link to="/library-catalogue">
        <h2>Catalogue</h2>
      </Link>
    </div>
  )
}

export default Library;