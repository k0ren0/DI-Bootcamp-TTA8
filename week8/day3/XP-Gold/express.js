const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const postsRouter = require('./routes/posts');
app.use('/posts', postsRouter);

app.listen(port, () => {
  console.log(`I'm running here http://localhost:${port}`);
});