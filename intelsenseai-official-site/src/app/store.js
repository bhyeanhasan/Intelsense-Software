import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import modalReducer from "../features/Modal/modalSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    teamModal: modalReducer,
  },
});
