import { NavLink } from "react-router-dom";
import Navbar from "./UI/Navbar";

export default function Nav() {
  return (
    <Navbar
      links={[
        <NavLink key={1} className="nav-link" activeClassName="active" to="/">
          About Me
        </NavLink>,
        <NavLink
          key={2}
          className="nav-link"
          activeClassName="active"
          to="/portfolio"
        >
          Portfolio
        </NavLink>,
        <NavLink
          key={3}
          className="nav-link"
          activeClassName="active"
          to="/contact"
        >
          Contact
        </NavLink>,
        <NavLink
          key={4}
          className="nav-link"
          activeClassName="active"
          to="/resume"
        >
          Resume
        </NavLink>,
      ]}
    />
  );
}
