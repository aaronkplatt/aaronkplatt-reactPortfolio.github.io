import React from "react";
import "./style.css";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <h1 className="main" href="/">
        Aaron Platt
      </h1>
      <a className="navbar-brand tabs" href="/">
        About
      </a>
      <a className="navbar-brand tabs" href="./pages/portfolio.js">
        Portfolio
      </a>
      <a className="navbar-brand tabs" href="./pages/contact.js">
        Contact
      </a>
    </nav>
  );
}

export default Navbar;
