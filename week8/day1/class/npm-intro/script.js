const axios = require("axios");

// import axios from "axios";

const getUsers = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
};

getUsers()

module.exports = {getUsers};