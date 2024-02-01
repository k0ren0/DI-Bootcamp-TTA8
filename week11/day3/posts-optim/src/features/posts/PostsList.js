import AddPostForm from "./AddPostForm";
// import { useSelector } from "react-redux";
import { useEffect } from "react";
import ReactionButton from "./ReactionButton";
import Users from "../users/Users";
import { useFetchPosts, usePostsSelector } from "./postsHooks"; 

const PostsList = (props) => {
  const { posts, postStatus, author } = usePostsSelector();
  const callFetchPosts = useFetchPosts();

  useEffect(() => {
    callFetchPosts();
  }, [callFetchPosts]);

  if (postStatus === "loading") return <p>Loading...</p>;
  if (postStatus === "failed") return <p>Somthing went wrong, try in few minutes...</p>;

  const renderPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <ReactionButton post={post} />
    </article>
  ));

  return (
    <section>
      <AddPostForm />
      <Users />
      <h2>Posts</h2>
      {renderPosts}
    </section>
  );
};

export default PostsList;
