const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const todosRout = require('./routes/todos');
app.use('/todos', todosRout);


app.get('/', (req, res) => {
  res.send('Hellllllllllooooooo, its your TO-DO list!');
});

app.listen(port, () => {
  console.log(`I'm running here http://localhost:${port}`);
});
