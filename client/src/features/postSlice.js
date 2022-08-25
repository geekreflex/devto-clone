import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';

const initialState = {
  tags: [],
  posts: [],
  status: 'idle',
};

export const getTagsAsync = createAsyncThunk(
  'getTagsAsync/user',
  async (_, thunkAPI) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.get(`${BASE_URL}/tags`, config);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const getPostsAsync = createAsyncThunk(
  'getPostsAsync/post',
  async (payload, thunkAPI) => {
    try {
      const config = {
        withCredentials: true,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.get(`${BASE_URL}/posts`, payload, config);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const createPostAsync = createAsyncThunk(
  'createPostAsync/post',
  async (payload, thunkAPI) => {
    try {
      const config = {
        withCredentials: true,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(`${BASE_URL}/posts`, payload, config);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: {
    [getTagsAsync.pending]: (state) => {
      state.status = 'loading';
    },
    [getTagsAsync.fulfilled]: (state, action) => {
      state.status = 'idle';
      state.tags = action.payload.payload;
    },
    [getTagsAsync.rejected]: (state, action) => {
      state.status = 'idle';
    },

    [createPostAsync.pending]: (state) => {
      state.status = 'loading';
    },
    [createPostAsync.fulfilled]: (state, action) => {
      state.status = 'idle';
    },
    [createPostAsync.rejected]: (state, action) => {
      state.status = 'idle';
    },

    [getPostsAsync.pending]: (state) => {
      state.status = 'loading';
    },
    [getPostsAsync.fulfilled]: (state, action) => {
      state.status = 'idle';
      state.posts = action.payload.payload;
    },
  },
});

export default postSlice.reducer;
