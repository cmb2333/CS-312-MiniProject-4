const express = require('express');
const router = express.Router();

// In-memory store for posts (since there's no database)
let posts = [];

// Get all posts
router.get('/posts', (req, res) => {
  res.json(posts);
});

// Create a new post
router.post('/posts', (req, res) => {
  const newPost = {
    id: posts.length + 1,
    name: req.body.name,
    title: req.body.title,
    content: req.body.content,
    postedOn: new Date(),
  };
  posts.push(newPost);
  res.status(201).json(newPost); // Return the created post with a 201 status code
});

// Get a specific post by ID
router.get('/posts/:id', (req, res) => {
  const post = posts.find(post => post.id === parseInt(req.params.id));
  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }
  res.json(post);
});

// Update a post by ID
router.put('/posts/:id', (req, res) => {
  const post = posts.find(post => post.id === parseInt(req.params.id));
  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }
  post.name = req.body.name;
  post.title = req.body.title;
  post.content = req.body.content;
  res.json(post); // Return the updated post
});

// Delete a post by ID
router.delete('/posts/:id', (req, res) => {
  const postIndex = posts.findIndex(post => post.id === parseInt(req.params.id));
  if (postIndex === -1) {
    return res.status(404).json({ error: 'Post not found' });
  }
  posts.splice(postIndex, 1);
  res.status(204).send(); // Send a 204 status with no content
});

module.exports = router;
