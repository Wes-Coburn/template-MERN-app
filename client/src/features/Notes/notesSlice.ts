/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../../app/store';

export interface Note {
  id: number;
  value: string;
}

export interface NotesState {
  value: Array<Note>;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: NotesState = {
  value: [
    { id: 1, value: 'note-1' },
    { id: 2, value: 'note-2' },
    { id: 3, value: 'note-3' },
  ],
  status: 'idle',
};

export const getAllNotes = createAsyncThunk('notes/getAllNotes', async () => {
  const response = await fetch('http://localhost:5050/note');
  const jsonResponse = await response.json();
  return jsonResponse.data;
});

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllNotes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllNotes.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload; // CHANGE THIS TO ACCEPT PROPER PAYLOAD
      })
      .addCase(getAllNotes.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

// export const {} = notesSlice.actions;

export const selectNotes = (state: RootState) => state.notes.value;

export default notesSlice.reducer;
