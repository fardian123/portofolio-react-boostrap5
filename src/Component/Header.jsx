import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        
        <a className="navbar-brand" href="#">
          Fardian Portofolio
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
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#aboutme">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#footer">
                Social
              </a>
            </li>
            
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
