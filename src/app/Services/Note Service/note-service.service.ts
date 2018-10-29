import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '../Response/Response';
import { Observable } from 'rxjs';
import { NoteDetail } from './Models/NoteDetail';
import { NoteCreationModel } from './Models/NoteCreationModel';
import { NoteBase } from './Models/NoteBase';
import { TagSummary } from '../Tag Service/Models/TagSummary';
import { NoteSearch } from '../Search/NoteSearch';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {

  private baseUrl : string = "https://localhost:5001/api/Notes"
  private notesByTag : string = "/Search"
  private createNoteUrl : string = "/Create"
  private hardDeleteUrl : string = "/HardDelete/"

  constructor(private _http : HttpClient) { }

  public GetNotesBySearch(search : NoteSearch) : Observable<Response<NoteDetail[]>>{
    return this._http.post<Response<NoteDetail[]>>(this.baseUrl + this.notesByTag, search);
  }

  public GetNote(noteId : number) : Observable<Response<NoteDetail>>{
    return this._http.get<Response<NoteDetail>>(this.baseUrl + "/" + noteId);
  }

  public CreateNote(createNote : NoteCreationModel) : Observable<Response<NoteDetail>>{
    return this._http.post<Response<NoteDetail>>(this.baseUrl + this.createNoteUrl, createNote);
  }

  public HardDeleteNote(id : number) : Observable<Response<number>>{
    return this._http.delete<Response<number>>(this.baseUrl + this.hardDeleteUrl + id);
  }

  public BuildNoteBase(title : string, content : string, isPublic : boolean = true, isDeleted : boolean = false) : NoteBase{
    let note : NoteBase = new NoteBase();

    note.title = title;
    note.content = content;
    note.public = isPublic;
    note.isDeleted = isDeleted;

    return note;
  }

  public BuildNoteCreationModel(title : string, content : string, createdByUserId : number, tags : TagSummary[] = [], isPublic : boolean = true, isDeleted : boolean = false) : NoteCreationModel{
    let note : NoteCreationModel = new NoteCreationModel();

    note.title = title;
    note.content = content;
    note.public = isPublic;
    note.isDeleted = isDeleted;
    note.createdByUserId = createdByUserId;
    note.tags = tags;

    return note;
  }
}
