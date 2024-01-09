const express = require("express");

const app = express();

app.listen(3001, () => {
    console.log("run on port 3001");
});

app.use("/", express.static(__dirname + "/public"));
// app.use("/files", express.static(__dirname + "/files"));

// console.log("Hi from server");

/*
app.get
app.post
app.put
app.delete
*/

// app.use("/users", (request, response) => {
//     response.send("<h1>hello NODEMON</h1>");
// });


// app.get("/api", (request, response) => {
//     response.send("<h1>API</h1>");
// });

// app.get("/users/:id", (req, res) => {
//     console.log(req.params);
//     res.send("OK");
// });


// app.post("/post", (request, response) => {
//     response.send("<h1>post</h1>");
// });

const users = [
    {id: 1, name: "John", email: "jjj@gmail.com"},
    {id: 2, name: "Mary", email: "jaaaa@gmail.com"},
    {id: 3, name: "Lise", email: "jbbb@gmail.com"},
];


app.get("/users", (request, response) => {
    response.json(users);
});

// params
app.get("/users/:id", (req, res) => {
        console.log(req.params);
        const { id } = req.params;
        const user = users.find(item => item.id == id);
        if(!user) return res.status(404).json({msg: "User not found"});
        res.json(user);
    });


// // query
//base
// app.get('/search', (req, res) => {
//     console.log(req.query); // This will log the query parameters to the console
//     const {name} = req.query;
//     res.send("OKKKKK"); // Respond with the string "OKKKKK"
// });

app.get('/search', (req, res) => {
    console.log(req.query); // This will log the query parameters to the console

    const { name } = req.query;
    
    if (!name) {
        return res.status(400).json({ error: 'Name is missing in the query parameters' });
    }

    const filteredUsers = users.filter(item => {
        return item.name.toLowerCase().includes(name.toLowerCase());
    });

    if (filteredUsers.length === 0) {
        return res.status(404).json({ msg: 'No users found with the specified name' });
    }

    // Send the filtered users in the response
    res.json(filteredUsers);
});




// app.get('/search', (req, res) => {
//     const firstLetter = req.query.firstLetter;

//     if (!firstLetter) {
//         return res.status(400).json({ error: 'First letter is missing' });
//     }

//     // Производим поиск в массиве пользователей по первой букве имени
//     const searchResults = users.filter(user =>
//         user.name.toLowerCase().startsWith(firstLetter.toLowerCase())
//     );

//     if (searchResults.length === 0) {
//         return res.status(404).json({ msg: 'No users found with the specified first letter' });
//     }

//     res.json(searchResults);
// });
