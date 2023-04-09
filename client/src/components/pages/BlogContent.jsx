import React from "react";
import { Link } from "react-router-dom";
const BlogContent = ({ title, blogimage, content }) => {
  return (
    <section className="blogContent">
      <div className="backBtn">
        <Link to="/">Back</Link>
      </div>
      <h1>{title}</h1>
      <div className="content">
        <div className="imageHolder">
          <img src={`http://localhost:5000/${blogimage}`} alt={title} />
        </div>
        <p>{content}</p>
      </div>
    </section>
  );
};

export default BlogContent;
