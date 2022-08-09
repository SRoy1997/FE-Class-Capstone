import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>

      <div>
        <NavLink to="/widgets">Widgets</NavLink>
      </div>

      <div>
        <NavLink to="/about">About</NavLink>
      </div>

      <div>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      <div>
        <NavLink to="/login">Login</NavLink>
      </div>
    </div>
  );
}
