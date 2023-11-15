/* eslint-disable no-underscore-dangle */
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { selectNotes, selectNotesStatus } from './notesSlice';
import Note from './Note';
import NotFound from '../NotFound';
import Loading from '../Loading';

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

  if (foundNote === undefined) return <NotFound />;

  switch (notesState) {
    case 'pending':
      return <Loading />;
    case 'failed':
      return <NotFound />;
    default:
      return <Note text={foundNote.text} />;
  }
}
