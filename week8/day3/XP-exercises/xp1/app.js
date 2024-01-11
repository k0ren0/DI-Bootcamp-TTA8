const express = require('express');
const app = express();
const port = 3000;

const routes = require('./routes');
app.use('/app', routes);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('Hellllllllllooooooo, hello Express!');
});

app.listen(port, () => {
  console.log(`I'm running here http://localhost:${port}`);
});
