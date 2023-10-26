import {Component} from '@angular/core';
import {Note} from './model/note.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  notes: Note[] = [
    {title: 'Заметка 1', content: 'Content of Note 1'},
    {title: 'Заметка 2', content: 'Content of Note 2'},
    {title: 'Заметка 3', content: 'Content of Note 3'},

  ];
  selectedNote: Note;
  showAddNoteForm = false;

  onNoteSelected(selectedNote: Note) {
    this.selectedNote = selectedNote;
  }

  toggleAddNoteForm() {
    this.showAddNoteForm = !this.showAddNoteForm;
  }

  onAddNote(newNote: { title: string, content: string }) {
    const { title, content } = newNote;
    const note: Note = {  title, content };
    this.notes.push(note);
    this.showAddNoteForm = false;
  }
}
