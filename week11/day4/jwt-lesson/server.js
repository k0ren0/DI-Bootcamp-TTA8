import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// import bodyParser from 'body-parser';
dotenv.config()

const app = express();
// const app = require('express');
// const bodyParser = require('body-parser');
// const userRoutes = require('./routes/userRoutes');

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json());
// app.use(bodyParser.json());


app.listen(process.env.PORT || 3001, () => {
  console.log(`I'm running on ${process.env.PORT || 3001}`);
});
