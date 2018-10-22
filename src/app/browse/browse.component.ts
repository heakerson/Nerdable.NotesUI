import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from '../Services/Note Service/note-service.service';
import { TagService } from '../Services/Tag Service/tag.service';
import { TagSummary } from '../Services/Tag Service/Models/TagSummary';
import { Response } from '../Services/Response/Response'
import { NoteDetail } from '../Services/Note Service/Models/NoteDetail';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {

  allTagsResponse : Response<TagSummary[]> = new Response<TagSummary[]>();
  notes : Response<NoteDetail[]> = new Response<NoteDetail[]>();
  selectionString : string = "Browse notes by selecting a tag in the left column";

  constructor(private _tagService : TagService, private _noteService : NoteServiceService) { }

  ngOnInit() {
    this._tagService.GetAllTags()
    .subscribe(response => {
      this.allTagsResponse = response;
    });
  }

  public SelectTag(id : number){

    this._noteService.GetNotesByTagId(id).subscribe(
      response => {
        this.notes = response;
      }, 
      err => {
        this.notes.data = null;
        this.selectionString = "This tag does not have any associated notes currently.";
    });

  }

}
