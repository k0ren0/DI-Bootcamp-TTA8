import AddPostForm from "./AddPostForm";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./postsSlice";
import { useEffect} from "react";
import ReactionButton from "./ReactionButton";


const PostsList = (props) => {
    const posts = useSelector(state => state.posts.posts);
    const postStatus = useSelector(state => state.posts.status);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchPosts())
    },[dispatch])

    // console.log(postStatus);
    
    if(postStatus==="loading") return <p>Loading...</p>
    
    if(postStatus==="failed") return <p>Somthing went wrong, rega ...</p>

    const renderPosts = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p> {/* Display post content */}
            <ReactionButton post={post} /> {/* Add ReactionButton */}
        </article>
    ));

   

    return (
        <section>
            <AddPostForm/>
            <h2>Posts</h2>
            {renderPosts}
        </section>
    );
};

export default PostsList;

