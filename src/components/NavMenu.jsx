import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function NavMenu() {
  const [visible, setVisible] = useState(true);
  const [hamburger, setHamburger] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 425) {
        setVisible(true);
        setHamburger(false);
      } else {
        setVisible(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);
  return (
    <div className="nav-area">
      <Link to="/"><h2 style={{display: hamburger? "none" : "block"}} id="app-logo">tiny library</h2></Link>
      <button id="menu-button" style={{display: visible ? "none" : "flex"}} onClick={()=> setHamburger(!hamburger)}>menu</button>
      <div className="nav-menu" style={{display: visible || hamburger ? "flex" : "none"}}>
        <Link to="/">Library Menu</Link>
        <Link to="/new-library">Start A New Library</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  )
}

export default NavMenu;