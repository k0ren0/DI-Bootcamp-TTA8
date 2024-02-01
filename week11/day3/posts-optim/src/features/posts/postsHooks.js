import { createSelector } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import { fetchPosts, posts as selectPosts, author as selectAuthor } from "./postsSlice";

const selectorPosts = createSelector(
    [selectPosts, selectAuthor],
    (posts, author) => {
        
        if (author === -1) {
            return { posts, postStatus: 'succeeded', author };
        } else {
           
            const filteredPosts = posts.filter(post => post.userId === author);
            return { 
              posts: filteredPosts, 
              postStatus: 'succeeded', 
              author 
            };
        }
    }
);

export const usePostsSelector = () => {
    return useSelector(selectorPosts);
};

export const useFetchPosts = () => {
    const dispatch = useDispatch();
    return useCallback(() => {
        dispatch(fetchPosts());
    }, [dispatch]);
};
