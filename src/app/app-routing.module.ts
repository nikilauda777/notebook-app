import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NoteListComponent} from './components/note-list/note-list.component';
import {NoteDetailsComponent} from './components/note-details/note-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/notes', pathMatch: 'full' },
  { path: 'notes', component: NoteListComponent },
  { path: 'note/:id', component: NoteDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
