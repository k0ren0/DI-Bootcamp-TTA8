const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

const quizRoutes = require("./routes/quizRoutes.js");

app.use(bodyParser.json());
app.use('/', quizRoutes);

app.listen(PORT, () => {
  console.log(`I'm running here http://localhost:${PORT}`);
});
