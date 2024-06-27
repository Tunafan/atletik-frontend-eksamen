import { NavLink } from "react-router-dom";
import "./navBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/athletes"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Athletes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clubs"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Clubs
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
