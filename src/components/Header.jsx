import React from "react";

const Header = () => {
  return (
    <nav className="header__nav">
      <div className="header__logo">
        <h2>
          D<span>Z</span>
        </h2>
      </div>
      <ul className="header__menu">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#article">Article</a>
        </li>
      </ul>
      <a href="#subscribe">
        <button className="header__nav_btn "> SUBSCRIBE </button>
      </a>
    </nav>
  );
};

export default Header;
