import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowseComponent } from './browse/browse.component';
import { HomeComponent } from './home/home.component';
import { NoteComponent } from './note/note.component';
import { NoteServiceService } from './Services/Note Service/note-service.service';
import { TagService } from './Services/Tag Service/tag.service';
import { UserService } from './Services/User Service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateNoteComponent } from './create-note/create-note.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BrowseComponent,
    CreateNoteComponent,
    HomeComponent,
    NoteComponent,
    CreateNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    NoteServiceService,
    TagService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
