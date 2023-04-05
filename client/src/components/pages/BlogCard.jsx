import React from "react";
import { Link } from "react-router-dom";
const BlogCard = () => {
  return (
    <section className="blogCard">
      <div className="imgBlog">
        <Link to="/blog-article">
          <img src="/assets/kech.jpeg" alt="" />
        </Link>
      </div>
      <div className="discover">
        <Link to="/blog-article">Discover</Link>
      </div>
    </section>
  );
};

export default BlogCard;
