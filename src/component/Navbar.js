import React from "react";
import Logo from "../assets/images/mascot.png";
import Kyou from "../assets/images/kyou.png";

export default function Navbar() {
  return (
    <nav className="container navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand pl-5" href="/">
        <img src={Logo} alt="Logo" />
        <img src={Kyou} alt="Kyou" style={{ paddingLeft: 90 }} />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              Pricing
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown link
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="">
                Action
              </a>
              <a className="dropdown-item" href="">
                Another action
              </a>
              <a className="dropdown-item" href="">
                Something else here
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
