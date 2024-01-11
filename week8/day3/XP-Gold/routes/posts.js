const express = require('express');
const router = express.Router();
const BlogPost = require('../models/post');

const blogPosts = [];

// // 4. GET /posts: Retrieve a list of all blog posts.
router.get('/', (req, res) => {
  res.json(blogPosts);
});

// // 5. GET /posts/:id: Retrieve a specific blog post by ID.
router.get('/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }

  res.json(post);
});

// // 6. POST /posts: Create a new blog post.
router.post('/', (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }

  const newPost = new BlogPost(blogPosts.length + 1, title, content, new Date());
  blogPosts.push(newPost);

  res.status(201).json(newPost);
});

// // 7. PUT /posts/:id: Update a blog post by ID.
router.put('/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const { title, content } = req.body;

  const postIndex = blogPosts.findIndex((p) => p.id === postId);

  if (postIndex === -1) {
    return res.status(404).json({ error: 'Post not found' });
  }

  const updatedPost = { ...blogPosts[postIndex], title, content };
  blogPosts[postIndex] = updatedPost;

  res.json(updatedPost);
});

// // 8. DELETE /posts/:id: Delete a blog post by ID.
router.delete('/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const postIndex = blogPosts.findIndex((p) => p.id === postId);

  if (postIndex === -1) {
    return res.status(404).json({ error: 'Post not found' });
  }

  const deletedPost = blogPosts.splice(postIndex, 1);
  res.json(deletedPost[0]);
});

module.exports = router;