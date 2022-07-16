import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';

const initialState = {};

export const getUserProfileAsync = createAsyncThunk(
  'getUserProfileAsync/user',
  async (_, thunkAPI) => {
    try {
      const config = {
        headers: {
          withCredential: true,
        },
      };

      const { data } = await axios.get(`${BASE_URL}/auth/twitter`, config);
      console.log(data);
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
  extraReducers: {},
});

export default userSlice.reducer;
