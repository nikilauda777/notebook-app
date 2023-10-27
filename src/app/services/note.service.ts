import { Injectable } from '@angular/core';
import {Note} from '../model/note.model';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private notes: Note[] = [
    { id: 1, title: 'Заметка 1', content: 'Content of Note 1' },
    { id: 2, title: 'Заметка 2', content: 'Content of Note 2' },
    { id: 3, title: 'Заметка 3', content: 'Content of Note 3' },
  ];

  getNotes(): Note[] {
    return this.notes;
  }

  getNoteById(id: number): Note | undefined {
    return this.notes.find((note) => note.id === id);
  }

  addNote(newNote: Note): void {
    this.notes.push(newNote);
  }
}
