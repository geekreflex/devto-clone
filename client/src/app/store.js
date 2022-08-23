import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import userReducer from '../features/userSlice';
import actionReducer from '../features/actionSlice';
import postReducer from '../features/postSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    action: actionReducer,
    post: postReducer,
  },
});
