import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">
        Penny<br />Pincher
      </h1>
      <div className="buttons">
        <button className="btn">Log in</button>
        <button className="btn">Sign up</button>
      </div>
    </header>
  );
};

export default Header;
