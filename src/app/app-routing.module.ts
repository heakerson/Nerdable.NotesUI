import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrowseComponent } from './browse/browse.component';
import { NoteComponent } from './note/note.component';
import { CreateNoteComponent } from './create-note/create-note.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: {title: 'Notes Home'}},
  { path: 'browse', component: BrowseComponent, data: {title : 'Browse Notes'}},
  { path: 'notes/create', component: CreateNoteComponent, data: {title : 'Create Notes'}},
  { path: 'notes/:id', component: NoteComponent, data: {title : 'Note'}},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing : true}
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
