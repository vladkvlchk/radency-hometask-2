import { configureStore } from '@reduxjs/toolkit';
import notes from './slices/notes/slice';
import { useDispatch } from 'react-redux';

export const store: any = configureStore({
  reducer: {
    notes
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const UseAppDispatch = () => useDispatch<AppDispatch>();