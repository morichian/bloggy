import { Link } from "react-router-dom";
const Card = ({ id, title }) => {
  return (
    <Link to="/blog-article" className="card">
      <img src="/assets/kech.jpeg" alt="" />
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
