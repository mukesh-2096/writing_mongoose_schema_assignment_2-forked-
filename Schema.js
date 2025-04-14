const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  username: { type: String, required: true },
  message: { type: String, required: true },
  commentedAt: { type: Date, default: Date.now }
});

const blogSchema = new mongoose.Schema({
  title: { type: String, unique: true, required: true, minlength: 5 },
  content: { type: String, required: true, minlength: 50 },
  author: { type: String, required: true },
  tags: { type: [String] },
  category: { type: String, default: "General" },
  likes: { type: [String] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
  comments: [commentSchema]
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;