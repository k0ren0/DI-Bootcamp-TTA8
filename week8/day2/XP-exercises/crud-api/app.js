const express = require('express');
const { fetchPosts } = require ('./data/dataService');

const app = express();
const PORT = 5001;

app.listen(PORT, () => {
    console.log(`I'm running here http://localhost:${PORT}`);
    console.log(`Posts here http://localhost:${PORT}/posts`);
  });


app.get('/posts', async (req, res) => {
    try {
      const posts = await fetchPosts();
      res.json(posts);
      console.log('Success. Data retrieved and sent as a response.');
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
