const Blogs = require("../models/blogs");

const getBlogs = async (req, res) => {
  Blogs.find()
    .then((data) => res.json({ msg: data }))
    .catch((err) => console.log(err.message));
};

const setBlog = (req, res) => {
  const { title, cover, content, sammuary, poster } = req.body;
  Blogs.create({
    title: title,
    cover: cover,
    content: content,
    sammuary: sammuary,
    poster: poster,
  });
  res.json({ message: "Data Created" });
};

const updateBlog = (req, res) => {
  const { title, cover, content, sammuary, poster } = req.body;
  Blogs.findByIdAndUpdate(req.params.id, {
    title: title,
    cover: cover,
    content: content,
    sammuary: sammuary,
    poster: poster,
  })
    .then(
      res.json({
        title: title,
        cover: cover,
        content: content,
        sammuary: sammuary,
        poster: poster,
      })
    )
    .catch((err) => console.log(err));
};
const deleteBlog = (req, res) => {
  Blogs.findByIdAndDelete(req.params.id).then(res.json("deleted"));
};

module.exports = { getBlogs, setBlog, updateBlog, deleteBlog };
