/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from './store';

export type ColorScheme = 'system' | 'light' | 'dark';
export interface UserState {
  colorScheme: ColorScheme;
}

const initialState: UserState = {
  colorScheme: 'system',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    toggleColorThemeMode: (state) => {
      switch (state.colorScheme) {
        case 'system':
          state.colorScheme = 'dark';
          break;
        case 'light':
          state.colorScheme = 'system';
          break;
        case 'dark':
          state.colorScheme = 'light';
          break;
        default:
          break;
      }
    },
  },
});

export const { toggleColorThemeMode } = userSlice.actions;
export const selectColorScheme = (state: RootState) => state.user.colorScheme;
export default userSlice.reducer;
