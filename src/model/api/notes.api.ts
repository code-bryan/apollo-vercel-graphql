import { Note } from "../types/note";

export default class NotesApi {
  static get(): Note[] {
    return [
      {
        id: 'wefnn121dfw',
        title: 'Note',
        description: 'Note'
      },
      {
        id: 'wefnn121dfw2',
        title: 'Note1',
        description: 'Note1'
      },
      {
        id: 'wefnn121dfw3',
        title: 'Note2',
        description: 'Note2'
      }
    ];
  }

  static find(id: string): Note | undefined {
    const notes = NotesApi.get();
    const note = notes.find((note) => note.id === id);
    return note;
  }
}