import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [logged, setLogged] = useState(true);
  return (
    <header>
      <Link to="/">
        <img src="/assets/bloggy.png" alt="logo" />
      </Link>

      {logged ? (
        <Link className="createpost" to="/create">
          Create post
        </Link>
      ) : (
        <nav>
          <Link to="/login">Login</Link>
          <Link className="register" to="/register">
            Register
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
