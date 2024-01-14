const db = require('../config/db');

const getAllPosts = async (req, res) => {
  try {
    const posts = await db.select().from('posts');
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getPostById = async (req, res) => {
  const postId = req.params.id;

  try {
    const post = await db.select().from('posts').where({ id: postId }).first();

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createPost = async (req, res) => {
    const { title, content } = req.body;
  
    try {
      const [{ id }] = await db('posts').insert({ title, content }).returning('id');
  
      const newPost = await db('posts').where('id', id).first() || {};
  
      if (!id || !newPost.id) {
        return res.status(500).json({ error: 'Internal Server Error: Invalid or missing post ID after creation' });
      }
  
      console.log('Newly created post:', newPost);
      res.status(201).json(newPost);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

const updatePost = async (req, res) => {
  const postId = req.params.id;
  const { title, content } = req.body;

  try {
    const [updatedPost] = await db('posts')
      .where({ id: postId })
      .update({ title, content })
      .returning('*');

    if (!updatedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.json(updatedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deletePost = async (req, res) => {
  const postId = req.params.id;

  try {
    const deletedPost = await db('posts').where({ id: postId }).del().returning('*');

    if (!deletedPost.length) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
