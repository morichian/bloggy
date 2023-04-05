import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

import BlogsContent from "./components/pages/BlogContent";
import Blogs from "./components/pages/Blogs";
const BloggyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blog-article" element={<BlogsContent />} />
    </Routes>
  );
};

export default BloggyRoutes;