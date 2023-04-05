const router = require("express").Router();
const multer = require("multer");
const multerConfig = multer.diskStorage({
  destination: (err, file, cb) => cb(null, "public"),
  filename: (err, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const uploadSet = multer({ storage: multerConfig });
const upload = uploadSet.single("image");

const {
  getBlogs,
  setBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/Blogs");
router.post("/upload", upload, (req, res) => {
  res.json({ msg: req.file.path });
});
router.get("/", getBlogs);
router.post("/create", setBlog);
router.put("/all/:id", updateBlog);
router.delete("/all/:id", deleteBlog);

module.exports = router;
