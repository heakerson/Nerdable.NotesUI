import { Injectable } from '@angular/core';
import { TagSummary } from '../Tag Service/Models/TagSummary';
import { IExplorerListener } from './Models/IExplorerListener';
import { TagService } from '../Tag Service/tag.service';
import { Response } from '../Response/Response';
import { TagDefinition } from '@angular/compiler';
import { TagDetail } from '../Tag Service/Models/TagDetail';
import { NoteServiceService } from '../Note Service/note-service.service';
import { NoteDetail } from '../Note Service/Models/NoteDetail';
import { ExplorerEvent } from './Models/ExplorerEvent';

@Injectable({
  providedIn: 'root'
})
export class ExplorerService{


  public SelectedTagResponse : Response<TagDetail> = new Response<TagDetail>();
  public SelectedTag : TagDetail = new TagDetail();


  public SelectedTagNotesResponse : Response<NoteDetail[]> = new Response<NoteDetail[]>();
  public SelectedTagNotes : NoteDetail[] = [];
  public EmptyNotesString : string = "Please make a selection";
  public InitialSelectionMade : boolean = false;

  public TopTags : Response<TagSummary[]> = new Response<TagSummary[]>();

  private Listeners : IExplorerListener[] = [];



  constructor(private _tagService : TagService, private _noteService : NoteServiceService) 
  { 
    this.SelectedTagResponse.data = new TagDetail();
    this.SelectedTagResponse.data.tagId = 0;
  }

  public RegisterExplorerListener(listener : IExplorerListener){
    this.Listeners.push(listener);
  }

  public GetTopTags(){
    this._tagService.GetAllTags()
    .subscribe(response => {
      this.TopTags = response;
    });
  }

  public SelectTag(id : number){
    this.InitialSelectionMade = true;

    this._tagService.GetTag(id).subscribe(
      successResponse => {
        this.SelectedTagResponse = successResponse;
        this.SelectedTag = successResponse.data;
      },
      errorResponse => {
        this.SelectedTagResponse = errorResponse;
      }
    );

    this._noteService.GetNotesByTagId(id).subscribe(
      successResponse => {
        this.SelectedTagNotesResponse = successResponse;
        this.SelectedTagNotes = this.SelectedTagNotesResponse.data;

        if(this.SelectedTagNotes.length == 0)
        {
          this.EmptyNotesString = "No notes found for this selection";
        }

        console.log(this.SelectedTagNotesResponse);
      },
      errorResponse => {
        this.SelectedTagNotesResponse = errorResponse;
        this.SelectedTagNotes = [];
        this.EmptyNotesString = "No notes found for this selection";
      }
    );
  }
}
