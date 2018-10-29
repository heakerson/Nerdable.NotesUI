import { Component, OnInit, Input } from '@angular/core';
import { DirectoryDetail } from '../Services/Tag Service/Models/Directory/DirectoryDetail';
import { TagService } from '../Services/Tag Service/tag.service';
import { ExplorerService } from '../Services/Explorer Service/explorer.service';
import { NoteSearch } from '../Services/Search/NoteSearch';

@Component({
  selector: 'app-explorer-directory',
  templateUrl: './explorer-directory.component.html',
  styleUrls: ['./explorer-directory.component.scss']
})
export class ExplorerDirectoryComponent implements OnInit {

  @Input()
  Directory : DirectoryDetail = new DirectoryDetail();
  ChildDirectories : DirectoryDetail[] = [];
  ChildrenRetrieved : boolean = false;

  public Expanded : boolean = false;

  constructor(private _tagService : TagService, private _explorerService : ExplorerService) { }

  ngOnInit() {

  }

  public ExpandChildren(id : number){
    this.Expanded = !this.Expanded;

    if(!this.ChildrenRetrieved){
      this.ChildrenRetrieved = true;

      this._tagService.GetChildDirectories(this.Directory.tagId).subscribe(successResponse => {
        this.ChildDirectories = successResponse.data;
      });
    }
  }

  public SelectDirectory(id : number){
    this._explorerService.SelectDirectory(id);
  }

}
