/* eslint-disable import/no-cycle */
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/Counter/counterSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const ThunkStatusOptions = {
  loading: 'loading',
  idle: 'idle',
  failed: 'failed',
};
const AllThunkStatus = [
  ThunkStatusOptions.loading,
  ThunkStatusOptions.idle,
  ThunkStatusOptions.failed,
] as const;
export interface ThunkStatus {
  status: (typeof AllThunkStatus)[number];
}
