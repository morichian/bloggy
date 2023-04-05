const router = require("express").Router();
const {
  getCards,
  getBlogs,
  setBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/Blogs");

router.get("/", getBlogs);
router.post("/create", setBlog);
router.put("/all/:id", updateBlog);
router.delete("/all/:id", deleteBlog);

module.exports = router;
