/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from './store';

export type ThemeColorMode = 'system' | 'light' | 'dark';
export interface UserState {
  themeColorMode: ThemeColorMode;
}

const initialState: UserState = {
  themeColorMode: 'system',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    toggleColorThemeMode: (state) => {
      switch (state.themeColorMode) {
        case 'system':
          state.themeColorMode = 'dark';
          break;
        case 'light':
          state.themeColorMode = 'system';
          break;
        case 'dark':
          state.themeColorMode = 'light';
          break;
        default:
          break;
      }
    },
  },
});

export const { toggleColorThemeMode } = userSlice.actions;
export const selectColorThemeMode = (state: RootState) =>
  state.user.themeColorMode;
export default userSlice.reducer;
