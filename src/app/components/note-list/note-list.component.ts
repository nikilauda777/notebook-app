import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Note} from '../../model/note.model';


@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent {
  @Input() notes: Note[];
  @Output() noteSelected = new EventEmitter<Note>();

  onNoteSelect(note: Note) {
    this.noteSelected.emit(note);
  }
}
