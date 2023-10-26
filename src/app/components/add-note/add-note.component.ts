import { Component, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {
  @Output() addNote = new EventEmitter<{ title: string, content: string }>();
  newNoteTitle = '';
  newNoteContent = '';

  onSubmit() {
    const newNote = {
      title: this.newNoteTitle,
      content: this.newNoteContent,
    };
    this.addNote.emit(newNote);
    this.newNoteTitle = '';
    this.newNoteContent = '';
  }
}
