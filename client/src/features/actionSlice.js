import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  unsavedModal: false,
  loginConModal: false,
};

const actionSlice = createSlice({
  name: 'action',
  initialState,
  reducers: {
    toggleUnsavedModal(state, action) {
      state.unsavedModal = action.payload;
    },
    toggleLoginConModal(state, action) {
      state.loginConModal = action.payload;
    },
  },
});

export default actionSlice.reducer;
export const { toggleUnsavedModal, toggleLoginConModal } = actionSlice.actions;
