import React from "react";
import { HashLink as Link } from "react-router-hash-link";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" id="nav">
      <div className="container">
        <a className="navbar-brand" href="#">
          Karan.dev
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item ">
              <Link
                to="home"
                className="nav-link active"
                aria-current="page"
                href="#home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="#experience" className="nav-link">
                Experience
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="#experience" className="nav-link">
                Education
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="#skills" className="nav-link">
                Skills
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="#projects" className="nav-link">
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
