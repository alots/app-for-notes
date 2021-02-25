import React from 'react';
import { NoteProps, NotePropsList } from '../../lib/types';
import Note from './Note';

interface Props {
  notes: NoteProps[]
}
const NoteListComponent = ({notes}: NotePropsList) => {
  console.log(notes)
  return (
    <div className='note-list'>
      {
        (notes) ?
        notes.map((note: NoteProps) =>
          <Note
            key = {note.uid}
            uid = {note.uid}
            title={note.title}
            description={note.description}
            createdAt={note.createdAt}
          />
        ) : 'Loading'
      }    
    </div>
  );
}

export default NoteListComponent;