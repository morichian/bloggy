import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src="/assets/bloggy.png" alt="logo" />
      </Link>
      <nav>
        <Link to="/login">Login</Link>
        <Link className="register" to="/register">
          Register
        </Link>
      </nav>
    </header>
  );
};

export default Header;
