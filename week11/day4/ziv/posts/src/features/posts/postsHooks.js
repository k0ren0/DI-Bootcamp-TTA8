import { createSelector } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import { posts, author, fetchPost } from "./postsSlice";

export const usePostsSelector = () => {
  const selectorPosts = createSelector([posts, author], (posts, author) => {
    if (author == -1) return posts;
    return posts.filter((post) => post.userId == author);
  });
  return useSelector(selectorPosts);
};

export const useFetchPost = () => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(fetchPost());
  }, [dispatch, fetchPost]);
};
