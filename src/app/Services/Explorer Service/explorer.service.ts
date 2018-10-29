import { Injectable } from '@angular/core';
import { TagSummary } from '../Tag Service/Models/TagSummary';
import { IExplorerListener } from './Models/IExplorerListener';
import { TagService } from '../Tag Service/tag.service';
import { Response } from '../Response/Response';
import { TagDefinition } from '@angular/compiler';
import { TagDetail } from '../Tag Service/Models/TagDetail';
import { NoteServiceService } from '../Note Service/note-service.service';
import { NoteDetail } from '../Note Service/Models/NoteDetail';
import { DirectoryDetail } from '../Tag Service/Models/Directory/DirectoryDetail';
import { NoteSearch } from '../Search/NoteSearch';

@Injectable({
  providedIn: 'root'
})
export class ExplorerService{
  
  public CurrentDirectory : DirectoryDetail = new DirectoryDetail();
  public CurrentSearchTags : TagDetail[] = [];
  public NoteSearchResults : NoteDetail[] = [];
  public EmptyNotesString : string = "Please make a selection";
  public InitialSelectionMade : boolean = false;
  public TopTags : Response<TagSummary[]> = new Response<TagSummary[]>();
  public CurrentSearch : NoteSearch = new NoteSearch();


  constructor(private _tagService : TagService, private _noteService : NoteServiceService) 
  { 
  }

  public GetTopTags(){
    this._tagService.GetAllTags()
    .subscribe(response => {
      this.TopTags = response;
    });
  }

  public UpdateSearch(){
    this.InitialSelectionMade = true;

    this._noteService.GetNotesBySearch(this.CurrentSearch).subscribe(
      successResponse => {
        this.NoteSearchResults = successResponse.data;

        if(successResponse.data === null)
        {
          this.EmptyNotesString = "No notes found for this selection";
        }
      },
      errorResponse => {
        this.NoteSearchResults = [];
        this.EmptyNotesString = "No notes found for this selection";
      }
    );
  }

  public AddTagToCurrentSearch(id : number){

    if(!this.TagIsInSearch(id)){

      this._tagService.GetTag(id).subscribe(
        successResponse => {
          this.CurrentSearchTags.push(successResponse.data);
        }
      );
  
      this.CurrentSearch.DirectFilterIds.push(id);
  
      this.UpdateSearch();
    }
  }


  public RemoveTagFromCurrentSearch(id : number){

    if(this.TagIsInSearch(id)){

      //removing the tag from the search list and the list of tagDetails
      var filterIdindex = this.CurrentSearch.DirectFilterIds.indexOf(id);
      if(filterIdindex > -1){
        this.CurrentSearch.DirectFilterIds.splice(filterIdindex, 1);
      };

      var tag = this.CurrentSearchTags.filter(t => t.tagId == id)[0];
      this.CurrentSearchTags.splice(this.CurrentSearchTags.indexOf(tag), 1);
  
      this.UpdateSearch();
    }
  }


  public TagIsInSearch(id : number) : boolean{
    return this.CurrentSearchTags.filter(t => t.tagId == id)
      .length != 0;
  }


  public SelectDirectory(id : number){

    this._tagService.GetDirectory(id).subscribe(
      successResponse => {
        this.CurrentDirectory = successResponse.data;
      }
    );

    this.CurrentSearch.DirectoryId = id;

    this.UpdateSearch();
  }
}
