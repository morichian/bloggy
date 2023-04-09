import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

import BlogsContent from "./components/pages/BlogContent";
import Blogs from "./components/pages/Blogs";
import CreateBlog from "./components/pages/CreateBlog";
const BloggyRoutes = ({ blogs }) => {
  return (
    <Routes>
      <Route path="/" element={<Home blogs={blogs} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/blogs" element={<Blogs blogs={blogs} />} />

      {blogs.map((blog) => (
        <Route
          path={`/${blog._id}`}
          element={
            <BlogsContent
              title={blog.title}
              blogimage={blog.image}
              content={blog.content}
            />
          }
        />
      ))}

      <Route path="/create" element={<CreateBlog />} />
    </Routes>
  );
};

export default BloggyRoutes;
