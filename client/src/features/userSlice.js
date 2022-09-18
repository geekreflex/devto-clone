import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';

const initialState = {
  user: null,
  status: 'idle',
};

export const getUserProfileAsync = createAsyncThunk(
  'getUserProfileAsync/user',
  async (_, thunkAPI) => {
    try {
      const config = {
        withCredentials: true,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.get(`${BASE_URL}/users/profile`, config);

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

export const addToBookmarkAsync = createAsyncThunk(
  'addToBookmarkAsync/post',
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
        `${BASE_URL}/posts/bookmark/add`,
        { postId: payload },
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

export const removeBookmarkAsync = createAsyncThunk(
  'removeBookmarkAsync/post',
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
        `${BASE_URL}/posts/bookmark/remove`,
        { postId: payload },
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

export const updateProfileAsync = createAsyncThunk(
  'updateProfileAsync/post',
  async (payload, thunkAPI) => {
    try {
      const config = {
        withCredentials: true,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.put(
        `${BASE_URL}/users/update`,
        payload,
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

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    /**
     * Get user profile info
     */
    [getUserProfileAsync.pending]: (state) => {
      state.status = 'loading';
    },
    [getUserProfileAsync.fulfilled]: (state, action) => {
      state.status = 'idle';
      state.user = action.payload.user;
      localStorage.setItem('auth-user', JSON.stringify(action.payload.user));
    },
    [getUserProfileAsync.rejected]: (state) => {
      state.status = 'idle';
    },

    [addToBookmarkAsync.pending]: (state) => {
      state.status = 'loading';
    },
    [addToBookmarkAsync.fulfilled]: (state, action) => {
      state.status = 'idle';
      console.log(action.payload);
      // state.user = action.payload.user;
      localStorage.setItem('auth-user', JSON.stringify(action.payload.user));
    },

    [updateProfileAsync.pending]: (state) => {
      state.status = 'loading';
    },
    [updateProfileAsync.fulfilled]: (state, action) => {
      state.status = 'idle';
      state.user = action.payload.user;
      localStorage.setItem('auth-user', JSON.stringify(action.payload.user));
    },
  },
});

export default userSlice.reducer;
