const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5010;

app.use(cors()); 
app.use(express.json()); 

// // v1 - text
// app.get('/hello', (req, res) => {
//     res.send('Hello');
//   });

// app.get('/hello/:name', (req, res) => {
//     res.send(`Hello, ${req.params.name}`);
//   });

// // v2 - json 
app.get('/hello', (req, res) => {
    res.json({ message: 'Hello' });
  });
  
  app.get('/hello/:name', (req, res) => {
    res.json({ message: `Hello ${req.params.name}` });
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
