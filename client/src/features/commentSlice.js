import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';

const initialState = {
  comments: [],
  status: 'idle',
};

export const postCommentAsync = createAsyncThunk(
  'postCommentAsync/comment',
  async (payload, thunkAPI) => {
    try {
      const config = {
        withCredentials: true,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        `${BASE_URL}/comments/${payload.postId}/comment`,
        payload,
        config
      );

      // return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const getCommentsAsync = createAsyncThunk(
  'getCommentsAsync/comment',
  async (payload, thunkAPI) => {
    try {
      const config = {
        withCredentials: true,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.get(
        `${BASE_URL}/comments/${payload.postId}/comments`,
        config
      );

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

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},
  extraReducers: {
    [postCommentAsync.pending]: (state) => {
      state.status = 'loading';
    },
    [postCommentAsync.fulfilled]: (state, action) => {
      state.status = 'idle';
      // window.location.reload();
    },
    [postCommentAsync.rejected]: (state, action) => {
      state.status = 'idle';
    },

    [getCommentsAsync.pending]: (state) => {
      state.status = 'loading';
    },
    [getCommentsAsync.fulfilled]: (state, action) => {
      state.status = 'idle';
      state.comments = action.payload.payload;
    },
    [getCommentsAsync.rejected]: (state, action) => {
      state.status = 'idle';
    },
  },
});

export default commentSlice.reducer;
