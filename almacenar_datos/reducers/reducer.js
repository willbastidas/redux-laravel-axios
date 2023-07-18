import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
  },
});

export const { addItem, removeItem } = itemsSlice.actions;
export default itemsSlice.reducer;