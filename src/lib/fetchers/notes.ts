import {NoteProps} from '../types/index';

const superagent = require("superagent");
const token = window.localStorage.getItem('token');

const notesAdapter = {
    postNote: (prop: NoteProps) => {
        return {
            data: {
                type: "notes",
                attributes: {
                    title: prop.name,
                    text: prop.description
                }
            }  
        }
    },
    transformNote: (rawNote: any) => {
        return {
            title: rawNote.title,
            description: rawNote.text,
            createdAt: rawNote.created_at
        }
    }
}

export const notesList = async() => {
    const notesResponse = await superagent.get('http://localhost:4567/api/v1/notes')
    .set('Authorization', `Bearer ${token}`)

    const note: Array<NoteProps> = notesResponse.body.data.map((resp: any) => {
        return notesAdapter.transformNote(resp.attributes)
    });

    return note;
}

export const newNote = (prop: NoteProps) => {
    const note = notesAdapter.postNote(prop);

    superagent.post('http://localhost:4567/api/v1/notes')
    .send(note)
    .set('Authorization', `Bearer ${token}`)
    .set('Accept', 'application/json')
    .set('Content-type', 'application/json')
    .then((res: any) => {
        console.log(res)
    })
    .catch((err: any) => {
        console.log(err)
    })
}