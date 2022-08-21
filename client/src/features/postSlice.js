import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';

const initialState = {
  tags: [],
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

      console.log(data);
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
  },
});

export default postSlice.reducer;
