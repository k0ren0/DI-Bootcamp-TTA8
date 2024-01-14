// server.js
const express = require('express');
const postRoutes = require('./routes/postRoutes');

const app = express();
const PORT = 3001;

app.use(express.json());

app.use('/', postRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
