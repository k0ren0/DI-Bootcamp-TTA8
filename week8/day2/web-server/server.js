const express = require("express");
// const bp = require("body-parser");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const users = [
    {id: 1, name: "John", email: "jjj@gmail.com"},
    {id: 2, name: "Mary", email: "jaaaa@gmail.com"},
    {id: 3, name: "Lise", email: "jbbb@gmail.com"},
];

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

// Static file serving
app.use("/", express.static(__dirname + "/public"));
// app.use('/files', express.static(__dirname + "/files"));


// console.log("Hi from server");

/*
app.get
app.post
app.put
app.delete
*/


// GET all users
app.get("/users", (req, res) => {
    res.json(users);
});

// GET user by ID
app.get("/users/:id", (req, res) => {
    const { id } = req.params;
    const user = users.find(item => item.id == id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
});


// GET users by name (query parameter)
app.get("/search", (req, res) => {
    const { name } = req.query;

    if (!name) {
        return res.status(400).json({ error: "Name is missing in the query parameters" });
    }

    const filteredUsers = users.filter(item => item.name.toLowerCase().includes(name.toLowerCase()));

    if (filteredUsers.length === 0) {
        return res.status(404).json({ msg: "No users found with the specified name" });
    }

    res.json(filteredUsers);
});

// POST create a new user
app.post("/users", (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: "Name and email are required" });
    }

    const new_user = { id: users.length + 1, name, email };
    users.push(new_user);

    res.status(201).json(new_user);
});

// PUT update user by ID

app.put("/users/:userId", (req, res) => {
    const userId = parseInt(req.params.userId, 10);
    const userToUpdate = users.find(user => user.id === userId);

    if (!userToUpdate) {
        return res.status(404).json({ error: "User not found" });
    }

    if (req.body.name) userToUpdate.name = req.body.name;
    if (req.body.email) userToUpdate.email = req.body.email;

    res.json(userToUpdate);
});

// DELETE endpoint to delete a user by ID

/** Delete - delete a user.*/ 
/** id as params - delete user. */

// app.delete("/users/:id", (req, res) => {
//     const { id } = req.params;
//     const indx = users.findIndex(item => item.id === id);
  
//     if (indx === -1) {
//       return res.sendStatus(404);
//     }
  
//     users.splice(indx, 1);
//     res.json(users);
//   });
  

app.delete("/users/:userId", (req, res) => {
    const userId = parseInt(req.params.userId, 10);

    // Find the index of the user in the array
    const userIndex = users.findIndex(user => user.id === userId);

    // Check if the user is not found
    if (userIndex === -1) {
        return res.status(404).json({ error: "User not found" });
    }

    // Remove the user from the array
    const deletedUser = users.splice(userIndex, 1)[0];

    res.json({ message: "User deleted successfully", deletedUser });
});







// // // // // To interact with these routes using Postman, you can follow these steps:

// GET All Users:

// Method: GET
// URL: http://localhost:3001/users
// This will return a JSON array containing all users.
// GET User by ID:

// Method: GET
// URL: http://localhost:3001/users/{userId}
// Replace {userId} with the actual user ID you want to retrieve.
// This will return a JSON object with the user details if the user is found, or a 404 error if the user is not found.
// GET Users by Name:

// Method: GET
// URL: http://localhost:3001/search?name={userName}
// Replace {userName} with the actual name you want to search for.
// This will return a JSON array containing users whose names match the provided query parameter.
// POST Create a New User:

// Method: POST
// URL: http://localhost:3001/users
// Body: Set the body type to "JSON (application/json)" and provide the following JSON data:
// json
// Copy code
// {
//   "name": "NewUser",
//   "email": "newuser@example.com"
// }
// This will create a new user and return the details of the newly created user.
// PUT Update User by ID:

// Method: PUT
// URL: http://localhost:3001/users/{userId}
// Replace {userId} with the actual user ID you want to update.
// Body: Set the body type to "JSON (application/json)" and provide the updated data. For example:
// json
// Copy code
// {
//   "name": "UpdatedName",
//   "email": "updatedemail@example.com"
// }
// This will update the specified user and return the updated user details.
// You can use Postman to send requests to these endpoints and observe the responses. Make sure your server is running (node yourFileName.js) and Postman is configured accordingly.

// Remember to adapt the values (URLs, IDs, etc.) based on your specific use case and the data you want to interact with.


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



// // query
//base
// app.get('/search', (req, res) => {
//     console.log(req.query); // This will log the query parameters to the console
//     const {name} = req.query;
//     res.send("OKKKKK"); // Respond with the string "OKKKKK"
// });


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

// /**
//  * Create - a new user
//  */

// app.post("/users", (req, res) => {
//     const { name, email } = req.body;
  
//     // Validate required properties
//     if (!name || !email) {
//       return res.status(400).json({ error: "Name and email are required" });
//     }
  
//     const new_user = { id: users.length + 1, name, email };
//     users.push(new_user);
  
//     // Respond with the newly created user
//     res.status(201).json(new_user);
//   });

/** Update - update */
/**user id that you want ti update - params
 * data - name, email
 */
// app.put("/users", (req,res)=>{

// })