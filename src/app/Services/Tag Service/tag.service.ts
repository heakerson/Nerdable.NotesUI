import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TagSummary } from './Models/TagSummary';
import { HttpClient } from '@angular/common/http';
import { Response } from '../Response/Response';
import { SearchBase } from '../Search/SearchBase';
import { DirectoryDetail } from './Models/Directory/DirectoryDetail';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  private baseUrl : string = "https://localhost:5001/api/Tag"
  private baseUrlDirectory : string = "https://localhost:5001/api/Directory";

  private getBaseDirectories : string = "/BaseDirectories"
  private getChildDirectories : string = "/ChildDirectories"
  private allTagsUrl : string = "/All"
  private getTagsBySearch : string = "/Search"

  constructor(private _http : HttpClient) { }

  public GetAllTags() : Observable<Response<TagSummary[]>>{
    return this._http.get<Response<TagSummary[]>>(this.baseUrl + this.allTagsUrl);
  }

  public GetTag(id : number): Observable<Response<DirectoryDetail>>{
    return this._http.get<Response<DirectoryDetail>>(this.baseUrl + "/" + id);
  }

  public GetDirectory(id : number): Observable<Response<DirectoryDetail>>{
    return this._http.get<Response<DirectoryDetail>>(this.baseUrlDirectory + "/" + id);
  }

  public GetBaseDirectories(): Observable<Response<DirectoryDetail[]>>{
    return this._http.get<Response<DirectoryDetail[]>>(this.baseUrlDirectory + this.getBaseDirectories);
  }

  public GetChildDirectories(id : number): Observable<Response<DirectoryDetail[]>>{
    return this._http.get<Response<DirectoryDetail[]>>(this.baseUrlDirectory + "/" + id + this.getChildDirectories);
  }

  public SearchTags(searchTerm : string) : Observable<Response<TagSummary[]>>{
    let search : SearchBase = new SearchBase(searchTerm);
    return this._http.post<Response<TagSummary[]>>(this.baseUrl + this.getTagsBySearch, search);
  }
}
