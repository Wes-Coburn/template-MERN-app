/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState, ThunkStatus } from '../../app/store';
import API from '../../app/api';

export interface Note {
  _id: string;
  text: string;
}

export interface NotesState extends ThunkStatus {
  value: Array<Note>;
}

const initialState: NotesState = {
  value: [],
  status: 'idle',
};

export const getAllNotes = createAsyncThunk('notes/getAllNotes', async () => {
  const response = await fetch(API.getAllNotes());
  const jsonResponse = await response.json();
  return jsonResponse;
});

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllNotes.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getAllNotes.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      })
      .addCase(getAllNotes.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

// export const {} = notesSlice.actions;
export const selectNotes = (state: RootState) => state.notes.value;
export const selectNotesStatus = (state: RootState) => state.notes.status;
export default notesSlice.reducer;
