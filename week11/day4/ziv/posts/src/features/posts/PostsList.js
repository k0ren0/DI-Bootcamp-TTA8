import AddPostForm from "./AddPostForm";
import { useSelector, useDispatch } from "react-redux";
// import { fetchPost, selectorPosts } from "./postsSlice";
import { usePostsSelector, useFetchPost } from "./postsHooks";
import { useEffect } from "react";
import ReactionButton from "./ReactionButton";
import Users from "../users/Users";

const PostsList = (props) => {
  // const posts = useSelector((state) => state.posts.posts);
  // const posts = useSelector(selectorPosts)
  const posts = usePostsSelector();

  const postStatus = useSelector((state) => state.posts.status);
  const author = useSelector((state) => state.posts.author);

  // const dispatch = useDispatch();

  // console.log(posts);

  const callFetchPosts = useFetchPost();

  useEffect(() => {
    // dispatch(fetchPost());
    callFetchPosts(1);
  }, []);

  if (postStatus === "loading") return <p>Loading...</p>;

  if (postStatus === "failed")
    return <p>Somthing went wrong, try in few minutes...</p>;

  const renderPosts = posts
    // .filter((post) => {
    //   if (author != -1) return post.userId == author;
    //   return post;
    // })
    .map((post) => {
      return (
        <article key={post.id}>
          <h3>{post.title}</h3>
          <ReactionButton post={post} />
        </article>
      );
    });

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
