import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  unsavedModal: false,
};

const actionSlice = createSlice({
  name: 'action',
  initialState,
  reducers: {
    toggleUnsavedModal(state, action) {
      state.unsavedModal = action.payload;
    },
  },
});

export default actionSlice.reducer;
export const { toggleUnsavedModal } = actionSlice.actions;
