import React from 'react';
import { NoteProps } from '../../lib/types/index';
import { data } from '../../lib/helpers/fakeDate';
import Note from '../../components/notes/Note';

import './style.scss';



const NotesListPage: React.FC = () => {
    const notesList: Array<NoteProps> = data;
    console.log(notesList)
    return (
            <div className='note-list'>
                {
                    notesList.map((note) => 
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

export default NotesListPage;