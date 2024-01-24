const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5010;

app.use(cors()); 
app.use(express.json()); 

app.get('/hello', (req, res) => {
    res.send('Hello');
  });

app.get('/hello/:name', (req, res) => {
    res.send(`Hello ${req.params.name}`);
  });
  
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
