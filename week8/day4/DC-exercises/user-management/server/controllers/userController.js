const bcrypt = require('bcrypt');
const knex = require('../config/database');

const userController = {
  async registerUser(req, res) {
    try {
      const { username, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);

      await knex('users_dc').insert({
        username,
        password: hashedPassword,
      });

      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  async loginUser(req, res) {
    try {
      const { username, password } = req.body;
      const user = await knex('users_dc').where({ username }).first();

      if (user && (await bcrypt.compare(password, user.password))) {
        res.json({ message: 'Login successful' });
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  async getAllUsers(req, res) {
    try {
      const users = await knex('users_dc');
      res.json({ users });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  async getUserById(req, res) {
    try {
      const { id } = req.params;
      const userId = parseInt(id, 10); 
      const user = await knex('users_dc').where({ id: userId }).first();
  
      if (user) {
        res.json({ user });
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  

  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { username, password } = req.body;

      const hashedPassword = await bcrypt.hash(password, 10);

      const updatedUser = await knex('users_dc')
        .where({ id })
        .update({
          username,
          password: hashedPassword,
        })
        .returning('*');

      if (updatedUser.length > 0) {
        res.json({ user: updatedUser[0] });
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = userController;
