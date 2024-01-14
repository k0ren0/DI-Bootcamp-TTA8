const express = require('express');
const app = express();
const PORT = 5001;
const booksRoutes = require('../routes/booksRoutes.js');

app.use(express.json());
app.use('/api', booksRoutes);


app.listen(PORT, () => {
  console.log(`I'm running here http://localhost:${PORT}`);
});