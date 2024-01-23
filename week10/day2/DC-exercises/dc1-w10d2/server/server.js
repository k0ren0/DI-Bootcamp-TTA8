const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5005;

app.use(cors()); 
app.use(express.json()); 

// GET endpoint
app.get('/api/hello', (req, res) => {
  res.send('Hello From Express');
});

// POST endpoint
app.post('/api/world', (req, res) => {
  console.log('post:', req.body.message);
  res.send(`I received your POST request. This is what you sent me: ${req.body.message}`);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
