const Blogs = require("../models/blogs");
const createBlog = async (req, res) => {
  const { name, email, password } = req.body;
  const image = req.file.filename;

  const newBlog = new Blogs({
    name: name,
    email: email,
    password: password,
    image: image,
  });
  const Blog = newBlog.save();
  res.status(201).json({ message: "Blog has been created !", details: Blog });
};

module.exports = { createBlog };
