import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    language: 'en',
    province: null,
    theme: 'light',
  },
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setProvince: (state, action) => {
      state.province = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setLanguage, setProvince, setTheme } = appSlice.actions;
export default appSlice.reducer;