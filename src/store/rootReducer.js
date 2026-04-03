import { combineReducers } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import checklistSlice from './slices/checklistSlice';
import appSlice from './slices/appSlice';

const rootReducer = combineReducers({
  user: userSlice,
  checklist: checklistSlice,
  app: appSlice,
});

export default rootReducer;