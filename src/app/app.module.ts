import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NoteDetailsComponent } from './components/note-details/note-details.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    NoteDetailsComponent,
    AddNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
