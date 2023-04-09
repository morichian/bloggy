import { Link } from "react-router-dom";
const Card = () => {
  return (
    <Link to="/blog-article" className="card">
      <img src="/assets/kech.jpeg" alt="" />
      <div className="content">
        <h2>Title</h2>
        <div className="btnHolder">
          <Link to="/blog-article">Read</Link>
        </div>
      </div>
    </Link>
  );
};

export default Card;
