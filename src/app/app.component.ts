import {Component} from '@angular/core';
import {Note} from './model/note.model';
import {NoteService} from './services/note.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pageTitle = 'Заметки';
  notes: Note[] = [];
  showAddNoteForm = false;

  constructor(private noteService: NoteService) {
    this.notes = this.noteService.getNotes();
  }

  toggleAddNoteForm() {
    this.showAddNoteForm = !this.showAddNoteForm;
  }

  onAddNote(newNote: { title: string, content: string }) {
    const id = this.notes.length + 1;
    const { title, content } = newNote;
    const note: Note = { id, title, content };
    this.noteService.addNote(note);
    this.showAddNoteForm = false;
  }
}
