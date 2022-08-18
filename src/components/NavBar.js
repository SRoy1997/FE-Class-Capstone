import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar-container">
      <div className="home">
        <NavLink to="/">Home</NavLink>
      </div>

      <div className="widgets">
        <NavLink to="/widgets">Widgets</NavLink>
      </div>

      <div className="about">
        <NavLink to="/about">About</NavLink>
      </div>

      <div className="contact">
        <NavLink to="/contact">Contact</NavLink>
      </div>

      <div className="logout">
        <NavLink to="/logout">Logout</NavLink>
      </div>
    </div>
  );
}
