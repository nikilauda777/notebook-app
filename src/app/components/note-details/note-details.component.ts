import {Component, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Note} from '../../model/note.model';
import {NoteService} from '../../services/note.service';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css'],
})
export class NoteDetailsComponent{
  @Input() selectedNote: Note;

  // constructor(
  //   private route: ActivatedRoute,
  //   private noteService: NoteService
  // ) {
  // }
  //
  // ngOnInit(): void {
  //   const id = +this.route.snapshot.params.id;
  //   this.selectedNote = this.noteService.getNoteById(id);
  // }
}
