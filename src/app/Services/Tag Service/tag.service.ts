import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TagSummary } from './Models/TagSummary';
import { HttpClient } from '@angular/common/http';
import { Response } from '../Response/Response';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  private baseUrl : string = "https://localhost:5001/api/Tag"
  private allTagsUrl : string = "/All"

  constructor(private _http : HttpClient) { }

  public GetAllTags() : Observable<Response<TagSummary[]>>{
    return this._http.get<Response<TagSummary[]>>(this.baseUrl + this.allTagsUrl);
  }
}
