import {Component, Input} from '@angular/core';
import {Note} from '../../model/note.model';
import {Router} from '@angular/router';
import {NoteService} from '../../services/note.service';


@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent {
  @Input() notes: Note[];

  constructor(private router: Router, private noteService: NoteService) {
  }

  onNoteSelect(note: Note) {
    this.noteService.setSelectedNote(note);
    this.router.navigate(['/note', note.id]);
  }
}
