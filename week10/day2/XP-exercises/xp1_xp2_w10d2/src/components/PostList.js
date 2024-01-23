import React, { useState, useEffect } from 'react';
import postsData from './posts.json';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(postsData);
    }, []);

    return (
        <div>
            {posts.map((post, index) => (
                <div key={index}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
};

export default PostList;
