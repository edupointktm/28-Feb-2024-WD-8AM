import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return(
        <>
        {/* header start */}
  <header id="header">
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="#">Green<span>Crop</span> </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Portfolio</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/our_team">Team</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  {/* header end */}
        </>
    )
}

export default Header