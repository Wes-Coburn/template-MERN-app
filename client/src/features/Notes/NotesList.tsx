/* eslint-disable no-underscore-dangle */
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectNotes, getAllNotes } from './notesSlice';
import Note from './Note';
import NotFound from '../NotFound';

export default function NotesList() {
  const notes = useAppSelector(selectNotes);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllNotes());
  }, [dispatch]);

  const notesList = notes.map((note) => (
    <Note key={note._id} text={note.text} />
  ));

  return notesList.length > 0 ? <div>{notesList}</div> : <NotFound />;
}
