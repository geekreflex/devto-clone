import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { getCookie } from '../utils/getCookie';

const initialState = {
  isAuth: false,
  status: 'idle',
  token: null,
};

export const registerAuthAsync = createAsyncThunk(
  'auth/registerAuthAsync',
  async (payload, thunkAPI) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        `${BASE_URL}/auth/register`,
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

export const loginAuthAsync = createAsyncThunk(
  'auth/loginAuthAsync',
  async (payload, thunkAPI) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        `${BASE_URL}/auth/login`,
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

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getTokenFromStorage(state) {
      const token = getCookie('user_access_token');
      if (token) {
        state.token = token;
        state.isAuth = true;
      }
    },
  },
  extraReducers: {
    /**
     * Register auth reducer
     */
    [registerAuthAsync.pending]: (state) => {
      state.status = 'loading';
    },
    [registerAuthAsync.fulfilled]: (state) => {
      state.status = 'idle';
    },
  },
});

export default authSlice.reducer;
export const { getTokenFromStorage } = authSlice.actions;
