import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './postsSlice';
import AddPostForm from './AddPostForm';
import ReactionButton from './ReactionButton';

const PostsList = () => {
  const posts = useSelector((state) => state.posts.posts);
  const postStatus = useSelector((state) => state.posts.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (postStatus === 'loading') return <p>Loading...</p>;

  if (postStatus === 'failed') return <p>Something went wrong...</p>;

  const renderPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title || 'No title'}</h3>
      <p>{post.content || 'No content'}</p>
      <ReactionButton post={post} />
    </article>
  ));

  return (
    <section>
      <AddPostForm />
      <h2>Posts</h2>
      {renderPosts}
    </section>
  );
};

export default PostsList;
