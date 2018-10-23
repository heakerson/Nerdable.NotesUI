import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TagSummary } from './Models/TagSummary';
import { HttpClient } from '@angular/common/http';
import { Response } from '../Response/Response';
import { SearchBase } from '../Search/SearchBase';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  private baseUrl : string = "https://localhost:5001/api/Tag"
  private allTagsUrl : string = "/All"
  private getTagsBySearch : string = "/Search"

  constructor(private _http : HttpClient) { }

  public GetAllTags() : Observable<Response<TagSummary[]>>{
    return this._http.get<Response<TagSummary[]>>(this.baseUrl + this.allTagsUrl);
  }

  public SearchTags(searchTerm : string) : Observable<Response<TagSummary[]>>{
    let search : SearchBase = new SearchBase(searchTerm);
    return this._http.post<Response<TagSummary[]>>(this.baseUrl + this.getTagsBySearch, search);
  }
}
