import React from "react";
import { Link } from "react-router-dom";
import "../Components/style/navbar.css";

const Navbar = () => {
  return (
    <div id="navlink">
      <nav className="na">
        <Link to="/"> ALL </Link>
        <Link to="/fullstack"> FULL STACK DEVELOPMENT </Link>
        <Link to="/datascience"> DATA SCIENCE </Link>
        <Link to="/cybersecurity"> CYBER SECURITY </Link>
        <Link to="/career"> CAREER </Link>
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
