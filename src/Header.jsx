import React from "react";

const Header = () => {
  return (
    <header>
      <h1 className="text-blue-700">Header Section</h1>
      <nav>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  );
};

export default Header;
