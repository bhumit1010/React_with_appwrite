import { configureStore } from '@reduxjs/toolkit';
import Reducer from '../fetures/slice';

export const store = configureStore({
  reducer: {
    counter: Reducer,
  },
});