import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../posts/postsSlice';

const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState(''); 
  const dispatch = useDispatch();
  const authors = useSelector((state) => state.users);

  const onSavePostClicked = () => {
    if (title && content && selectedAuthor) {
      dispatch(addPost({ title, content, author: selectedAuthor }));
      setTitle('');
      setContent('');
      setSelectedAuthor(''); 
    }
  };

  return (
    <section>
      <h2>Add Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="postContent">Post Content</label>
        <input
          type="text"
          id="postContent"
          name="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <label htmlFor="postAuthor">Select Author</label>
        <select
          id="postAuthor"
          name="postAuthor"
          value={selectedAuthor}
          onChange={(e) => setSelectedAuthor(e.target.value)}
        >
          <option value="">Select an author</option>
          {authors.map((author) => (
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          ))}
        </select>
        <button type="button" onClick={onSavePostClicked}>
          Save
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
