const router = require("express").Router();
const { createBlog } = require("../controllers/Blogs");
const upload = require("../util/imageUploader");

router.post("/create", upload, createBlog);

module.exports = router;
