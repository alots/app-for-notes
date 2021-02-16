import { useEffect, useState} from 'react';
import {notesList} from '../lib/fetchers/notes';
import {NoteProps} from '../lib/types/index';

 function WithNotesList(WrappedComponent: React.ElementType) {
    return function WithNotesList() {
        const [notes, setNotes] = useState<Array<NoteProps>>([]);

        useEffect(() => {
            notesList().then((result) => setNotes(result));
        }, []);

        return <WrappedComponent notes={notes} />;
    };
 }

export default WithNotesList;
