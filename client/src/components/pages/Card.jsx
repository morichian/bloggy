import { Link } from "react-router-dom";
const Card = ({ id, title, cover }) => {
  return (
    <Link to="/blog-article" className="card">
      <img src={`http://localhost:5000/${cover}`} alt="" />
      <div className="content">
        <h2>{title} </h2>
        <div className="btnHolder">
          <Link to={`/${id}`}>Read</Link>
        </div>
      </div>
    </Link>
  );
};

export default Card;
