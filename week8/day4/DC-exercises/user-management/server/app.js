const dotenv = require("dotenv");
dotenv.config();

const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const app = express();

app.use(bodyParser.json());

app.use('/users', userRoutes);

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server is running on ${process.env.PORT || 3001}`);
});


