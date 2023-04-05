import React from "react";
import { Link } from "react-router-dom";
const BlogContent = () => {
  return (
    <section className="blogContent">
      <div className="backBtn">
        <Link to="/">Back</Link>
      </div>
      <h1>Title</h1>
      <img src="/assets/mor.jpeg" alt="title" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia quam
        explicabo est ab iure possimus vel aspernatur deleniti qui aut dolores,
        odit quas minima consequuntur impedit fugiat voluptates voluptate
        reprehenderit voluptatem quo! Dicta, tempore. Deserunt possimus suscipit
        quae temporibus architecto distinctio nobis molestiae consectetur sequi
        expedita illo doloribus dolore, sit similique soluta quisquam, facere ea
        quidem porro consequuntur rem? Beatae eius debitis ipsam at laboriosam!
        Fugiat doloribus itaque cum ratione sed alias voluptatem consectetur
        reiciendis nobis molestias fuga debitis exercitationem deserunt adipisci
        quidem quo, ex quas quam assumenda neque dignissimos architecto aperiam
        dolorem. Culpa soluta dolores doloribus velit voluptatum libero?
      </p>
    </section>
  );
};

export default BlogContent;
