const bcrypt = require('bcrypt');
const fs = require('fs/promises');

const saltRounds = 10;
const usersFilePath = './users.json';

exports.registerUser = async (req, res) => {
  const { name, lastName, email, username, password } = req.body;

  try {
    let users = await fs.readFile(usersFilePath, 'utf8');
    users = JSON.parse(users);

    if (users.some(user => user.username === username)) {
      return res.status(400).json({ error: 'Username already exists.' });
    }


    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = {
      id: users.length + 1,
      name,
      lastName,
      email,
      username,
      password: hashedPassword,
    };

    users.push(newUser);

    await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2));

    return res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error registering user.' });
  }
};

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    let users = await fs.readFile(usersFilePath, 'utf8');
    users = JSON.parse(users);

    const user = users.find(user => user.username === username);

    if (!user) {
      return res.status(401).json({ error: 'User not found or incorrect password.' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      return res.status(200).json({ message: 'Login successful.' });
    } else {
      return res.status(401).json({ error: 'User not found or incorrect password.' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error logging in.' });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    let users = await fs.readFile(usersFilePath, 'utf8');
    users = JSON.parse(users);

    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error fetching users.' });
  }
};

exports.getUserById = async (req, res) => {
  const userId = parseInt(req.params.id);

  try {
    let users = await fs.readFile(usersFilePath, 'utf8');
    users = JSON.parse(users);

    const user = users.find(user => user.id === userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error fetching user.' });
  }
};

exports.updateUserById = async (req, res) => {
  const userId = parseInt(req.params.id);
  const { name, lastName, email } = req.body;

  try {
    // Read user data from JSON file
    let users = await fs.readFile(usersFilePath, 'utf8');
    users = JSON.parse(users);

    // Find the user with the provided ID
    const user = users.find(user => user.id === userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    user.name = name || user.name;
    user.lastName = lastName || user.lastName;
    user.email = email || user.email;

    await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2));

    return res.status(200).json({ message: 'User updated successfully.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error updating user.' });
  }
};
