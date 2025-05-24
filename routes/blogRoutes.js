const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");

const router = express.Router();

router.use(protect);

router.get("/", getBlogs);
router.post("/", createBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

module.exports = router;
