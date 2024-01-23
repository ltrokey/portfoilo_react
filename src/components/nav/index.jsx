import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

export default function Nav() {
  return (
    <Navbar
      links={[
        <NavLink key={1} className="nav-link" to="/">
          About Me
        </NavLink>,
        <NavLink key={2} className="nav-link" to="/portfolio">
          Portfolio
        </NavLink>,
        <NavLink key={3} className="nav-link" to="/contact">
          Contact
        </NavLink>,
        <NavLink key={4} className="nav-link" to="/resume">
          Resume
        </NavLink>,
      ]}
    />
  );
}
