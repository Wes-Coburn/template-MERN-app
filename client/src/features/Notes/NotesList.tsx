import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectNotes, getAllNotes } from './notesSlice';
/* import styles from "./NoteList.module.css"; */

export default function NotesList() {
  const notes = useAppSelector(selectNotes);
  const dispatch = useAppDispatch();

  dispatch(() => getAllNotes()); // UPDATE THIS TO WORK

  const notesList = notes.map((note) => <p key={note.id}>{note.value}</p>);
  return <div>{notes.length > 0 ? notesList : 'Notes List'}</div>;
}
