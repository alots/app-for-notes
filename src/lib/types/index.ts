export interface NoteProps {
  uid: string,
  title: string,
  description: string,
  createdAt: string
}

export interface NotePropsList {
  notes: NoteProps[]
}