import { Link } from "react-router-dom";
const Card = () => {
  return (
    <section className="card">
      <img src="/assets/kech.jpeg" alt="" />
      <div className="content">
        {" "}
        <h2>Title</h2>
        <summary>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
          officiis!
        </summary>
        <div className="btnHolder">
          <Link to="/blog-article">Read More</Link>
        </div>
      </div>
    </section>
  );
};

export default Card;
