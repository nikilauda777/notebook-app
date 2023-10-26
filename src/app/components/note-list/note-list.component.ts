import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Note} from '../../model/note.model';
import {Router} from '@angular/router';


@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent {
  @Input() notes: Note[];
  @Output() noteSelected = new EventEmitter<Note>();
  selectedNote: Note;

  constructor(private router: Router) {
  }

  onNoteSelect(note: Note) {
    this.selectedNote = note;
    this.noteSelected.emit(note);
    this.router.navigate(['/note', note.id]);
  }
}
