import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = ({ imageType = '/img/logo-dark.png', textColor = '#333' }) => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={imageType} alt="Logo" className="navbar__img" />
      </Link>
      <ul className="navbar__nav">
        <li>
          <NavLink exact to="/" activeClassName="navbar__nav__item--active" className="navbar__nav__item" style={{color: textColor}}>
            Strona Główna
          </NavLink>
        </li>
        <li>
          <NavLink to="/offer" activeClassName="navbar__nav__item--active" className="navbar__nav__item" style={{color: textColor}}>
            Usługi
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery" activeClassName="navbar__nav__item--active" className="navbar__nav__item" style={{color: textColor}}>
            Projekty
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="navbar__nav__item--active" className="navbar__nav__item" style={{color: textColor}}>
            Kontakt
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
