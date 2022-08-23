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
      state.user = null;
    },
    [getUserProfileAsync.fulfilled]: (state, action) => {
      state.status = 'idle';
      state.user = action.payload.user;
    },
    [getUserProfileAsync.rejected]: (state) => {
      state.status = 'idle';
      state.user = null;
    },
  },
});

export default userSlice.reducer;
