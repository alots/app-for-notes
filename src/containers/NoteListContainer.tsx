import React from 'react';

import Note from '../components/notes/Note';
import { NoteProps } from '../lib/types/index';
import WithNotesList from '../HOC/withNotesList'

const NoteListContainer = (notes: Array<NoteProps>) => {
    console.log(notes);
    return (
        <div className='note-list'>
                {
                    notes.map((note) => 
                    <div key={note.name} className='note'>
                        <Note 
                            name={note.name}
                            description={note.description}
                            createdAt={note.createdAt}
                        />
                    </div>
                    )
                }
            </div>
    );
}

export default WithNotesList(NoteListContainer);