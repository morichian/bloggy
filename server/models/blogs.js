const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  sammuary: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
});

const Blogs = mongoose.model("blogs", blogSchema);

module.exports = Blogs;
