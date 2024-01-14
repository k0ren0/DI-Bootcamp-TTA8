const express = require('express');
const db = require('./server/config/db');
const booksRouter = require('./server/routes/books');

const app = express();
const port = 5001;

// Connect to PostgreSQL
db.raw('select 1+1 as result').then(() => {
  console.log('PostgreSQL connected');
}).catch((err) => {
  console.error('Error connecting to PostgreSQL:', err.message);
  process.exit(1);
});

app.use(express.json());
app.use('/api/books', booksRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});