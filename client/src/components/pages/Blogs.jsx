import React from "react";
import BlogCard from "./BlogCard";
import Card from "./Card";

const Blogs = ({ blogs }) => {
  return (
    <section className="blogs">
      {blogs.map((blog) => (
        <Card id={blog._id} title={blog.title} />
      ))}
    </section>
  );
};

export default Blogs;
