/* eslint-disable no-underscore-dangle */
import { useEffect, lazy } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import { useAppSelector } from '../../app/hooks';
import { selectNotes, selectNotesStatus } from './notesSlice';
import Note from './Note';
import Loading from '../Loading';

const NotFound = lazy(() => import('../NotFound'));

function FindNoteWrapper(child: JSX.Element) {
  return <Fade>{child}</Fade>;
}

export default function FindNote() {
  const notes = useAppSelector(selectNotes);
  const notesState = useAppSelector(selectNotesStatus);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    // remove and setSearchParams in SearchBar
    setSearchParams({
      ...searchParams,
      noteId: '655427df3c13f38751f51afa', // replace with value from SearchBar
    });
  }, [searchParams, setSearchParams]);

  const noteId = searchParams.get('noteId');
  const foundNote = notes.find((note) => note._id === noteId);

  if (foundNote === undefined) return FindNoteWrapper(<NotFound />); // TODO: figure out why, action is dispatched from NotesList

  switch (notesState) {
    case 'pending':
      return FindNoteWrapper(<Loading />);
    case 'failed':
      return FindNoteWrapper(<NotFound />);
    default:
      return FindNoteWrapper(<Note text={foundNote.text} />);
  }
}
