import { Link } from "react-router-dom";
function NavMenu() {
  return (
    <div>
      <Link to="/">Library Menu</Link>
      <Link to="/add">Leave a Book!</Link>
      <Link to="/about">About</Link>
    </div>
  )
}

export default NavMenu;