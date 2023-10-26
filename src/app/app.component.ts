import {Component} from '@angular/core';
import {Note} from './model/note.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  notes: Note[] = [
    {id: 1, title: 'Заметка 1', content: 'Content of Note 1'},
    {id: 2, title: 'Заметка 2', content: 'Content of Note 2'},
    {id: 3, title: 'Заметка 3', content: 'Content of Note 3'},

  ];

  onNoteSelected(selectedNote: Note) {

  }
}
