import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/User Service/user.service';
import { NoteServiceService } from '../Services/Note Service/note-service.service';
import { NoteCreationModel } from '../Services/Note Service/Models/NoteCreationModel';
import { TagSummary } from '../Services/Tag Service/Models/TagSummary';
import { Response } from '../Services/Response/Response';
import { NoteDetail } from '../Services/Note Service/Models/NoteDetail';
import { Router } from '@angular/router';
import { TagService } from '../Services/Tag Service/tag.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {

  Username : string = this._userService.Username;
  UserId : number = this._userService.UserId;
  Title : string = "";
  Content : string = "";
  public : boolean = true;
  Tags : TagSummary[] = [];

  public TagSearch : string = "";
  public TagResult : TagSummary[] = [];

  constructor(private _userService : UserService, private _noteService : NoteServiceService, private _router : Router, private _tagService : TagService) { }

  ngOnInit() {
  }

  public CreateNote(){

    let note : NoteCreationModel = this._noteService.BuildNoteCreationModel(this.Title, this.Content, this.UserId, this.Tags);

    this._noteService.CreateNote(note).subscribe(
      success => {
        this._router.navigate(['/notes/' + success.data.noteId]);
      },
      err => {

      });
  }


  public SearchTags(search : string){

    if(search.length){
      this._tagService.SearchTags(search).subscribe(response => 
        {
          this.TagResult = response.data;
        });
    }
    else{
      this.TagResult = [];
    }
  }

  public AlreadySelected(tag : TagSummary) : boolean {
    let index = this.Tags.findIndex(t => t.tagId == tag.tagId);

    if(index > -1){
      return true;
    }
    
    return false;
  }

  public UpdateSelectedTags(tag : TagSummary){
    let index = this.Tags.findIndex(t => t.tagId == tag.tagId);

    if(this.AlreadySelected(tag)){
      this.Tags.splice(index, 1);
    }
    else{
      this.Tags.push(tag);
    }
  }

}
