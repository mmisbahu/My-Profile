import { createSlice } from '@reduxjs/toolkit';

const checklistSlice = createSlice({
  name: 'checklist',
  initialState: {
    items: [
      { id: 1, text: 'Apply for Social Insurance Number (SIN)', completed: false },
      { id: 2, text: 'Open a bank account', completed: false },
      { id: 3, text: 'Get a health card', completed: false },
      { id: 4, text: 'Find temporary housing', completed: false },
      { id: 5, text: 'Register for healthcare', completed: false },
      // Add more items
    ],
  },
  reducers: {
    toggleItem: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.completed = !item.completed;
      }
    },
    addItem: (state, action) => {
      state.items.push({ id: Date.now(), text: action.payload, completed: false });
    },
  },
});

export const { toggleItem, addItem } = checklistSlice.actions;
export default checklistSlice.reducer;