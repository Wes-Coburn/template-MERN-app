/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from './store';

export type ColorScheme = 'light' | 'dark';
export interface UserState {
  colorScheme: ColorScheme;
}

const initialState: UserState = {
  colorScheme: 'light',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleColorScheme: (state) => {
      state.colorScheme = state.colorScheme === 'light' ? 'dark' : 'light';
    },
    setColorScheme: (state, action: PayloadAction<ColorScheme>) => {
      state.colorScheme = action.payload;
    },
  },
});

export const { toggleColorScheme, setColorScheme } = userSlice.actions;
export const selectColorScheme = (state: RootState) => state.user.colorScheme;
export default userSlice.reducer;
