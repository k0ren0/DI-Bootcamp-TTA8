import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  status: 'idle', // 'loading' | 'succeeded' | 'failed'
  // error: null // Uncomment and implement if error handling is needed
};

const POST_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(POST_URL);
  const loadedPosts = response.data.map(post => ({
    ...post,
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  }));
  return loadedPosts;
});

export const addReactionToPost = createAsyncThunk(
  "posts/addReaction",
  async ({ postId, reaction }) => {
    return { postId, reaction };
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: { 
      reducer(state, action) {
        state.posts.unshift(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            body: content, // Changed 'body' to 'content'
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.status = 'failed';
        // state.error = action.error.message; // Implement if needed
      })
      .addCase(addReactionToPost.fulfilled, (state, action) => {
        const { postId, reaction } = action.payload;
        const existingPost = state.posts.find(post => post.id === postId);
        if (existingPost) {
          existingPost.reactions[reaction] = (existingPost.reactions[reaction] || 0) + 1;
        }
      });
  },
});

export const { addPost } = postsSlice.actions; 

export default postsSlice.reducer;
