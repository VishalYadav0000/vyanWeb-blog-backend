const Blog = require("../models/Blog");

exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ authorId: req.userId });
    res.json(blogs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch blogs" });
  }
};

exports.createBlog = async (req, res) => {
  try {
    const blog = await Blog.create({ ...req.body, authorId: req.userId });
    res.json(blog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create blog" });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findOneAndUpdate(
      { _id: req.params.id, authorId: req.userId },
      req.body,
      { new: true }
    );
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update blog" });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findOneAndDelete({ _id: req.params.id, authorId: req.userId });
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json({ message: "Blog deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to delete blog" });
  }
};
