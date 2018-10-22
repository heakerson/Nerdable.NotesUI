import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '../Response/Response';
import { Observable } from 'rxjs';
import { NoteDetail } from './Models/NoteDetail';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {

  private baseUrl : string = "https://localhost:5001/api/Notes"
  private notesByTag : string = "/ByTagIds"

  constructor(private _http : HttpClient) { }

  public GetNotesByTagId(tagId : number) : Observable<Response<NoteDetail[]>>{
    return this._http.post<Response<NoteDetail[]>>(this.baseUrl + this.notesByTag, tagId);
  }

  public GetNote(noteId : number) : Observable<Response<NoteDetail>>{
    return this._http.get<Response<NoteDetail>>(this.baseUrl + "/" + noteId);
  }
}
