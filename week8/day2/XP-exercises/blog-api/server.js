const express = require("express");

const app = express();

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

app.get('/posts', (req, res) => {
    res.json(data);
});


app.get('/posts/:id', (req, res) => {
    console.log('Received request for specific post by ID');
    const postId = parseInt(req.params.id);
    const post = data.find(entry => entry.id === postId);
    post ? res.json(post) : res.status(404).json({ message: 'Blog post not found' });
});

const PORT = 3000;

app.listen(PORT, () => {
console.log(`Go to http://localhost:${PORT}`);
});

