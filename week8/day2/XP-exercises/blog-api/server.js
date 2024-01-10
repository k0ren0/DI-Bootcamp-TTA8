const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const data = [
  {
    id: 1,
    title: 'Introduction to JavaScript',
    content: 'Learn the basics of JavaScript programming language in this introductory video.',
  },
  {
    id: 2,
    title: 'React.js Tutorial: Building a Simple App',
    content: 'Follow along with this tutorial to build a simple React.js application from scratch.',
  },
  {
    id: 3,
    title: 'Web Development Tips and Tricks',
    content: 'Explore useful tips and tricks for web development to enhance your coding skills.',
  },
];

app.get('/posts', (req, res) => res.json(data));

app.get('/posts/:id', (req, res) => {
  console.log('Received request for specific post by ID');
  const postId = parseInt(req.params.id);
  const post = data.find(entry => entry.id === postId);
  post ? res.json(post) : res.status(404).json({ message: 'Blog post not found' });
});

app.post('/posts', (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required for a new blog post' });
  }

  const newPost = {
    id: data.length + 1,
    title,
    content,
  };

  data.push(newPost);
  res.status(201).json(newPost);
});

app.put('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const postIndex = data.findIndex(entry => entry.id === postId);

  if (postIndex === -1) {
    return res.status(404).json({ message: 'Blog post not found' });
  }

  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required for updating a blog post' });
  }

  data[postIndex] = { id: postId, title, content };
  res.json(data[postIndex]);
});

app.delete('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const postIndex = data.findIndex(entry => entry.id === postId);

  if (postIndex === -1) {
    return res.status(404).json({ message: 'Blog post not found' });
  }

  const deletedPost = data.splice(postIndex, 1)[0];
  res.json(deletedPost);
});

// Error handling for invalid routes
app.use((req, res) => res.status(404).json({ message: 'Route not found' }));

// Error handling for server errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

const PORT = 3000;

app.listen(PORT, () => console.log(`I'm running here http://localhost:${PORT}`));
