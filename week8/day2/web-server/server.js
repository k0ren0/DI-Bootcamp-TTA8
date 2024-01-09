const express = require("express");

const app = express();

app.listen(3001)

// console.log("Hi from server");

/*
app.get
app.post
app.put
app.delete
*/

app.use("/users", (request, response) => {
    response.send("<h1>hello NODEMON</h1>");
});

app.get("/api", (request, response) => {
    response.send("<h1>API</h1>");
});


app.post("/post", (request, response) => {
    response.send("<h1>post</h1>");
});

