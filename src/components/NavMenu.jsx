import { Link } from "react-router-dom";
function NavMenu() {
  return (
    <div className="nav-menu">
      <Link to="/">Library Menu</Link>
      <Link to="/new-library">Start A New Library</Link>
      <Link to="/about">About</Link>
    </div>
  )
}

export default NavMenu;