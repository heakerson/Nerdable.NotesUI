import { Component, OnInit, Input } from '@angular/core';
import { Response } from '../Services/Response/Response';
import { TagDetail} from '../Services/Tag Service/Models/TagDetail';
import { ExplorerService } from '../Services/Explorer Service/explorer.service';
import { IExplorerListener } from '../Services/Explorer Service/Models/IExplorerListener';
import { TagService } from '../Services/Tag Service/tag.service';
import { DirectoryDetail } from '../Services/Tag Service/Models/Directory/DirectoryDetail';

@Component({
  selector: 'app-tag-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent implements OnInit {

  BaseDirectories : DirectoryDetail[] = [];

  constructor(private _explorerService : ExplorerService, private _tagService : TagService) { }

  ngOnInit() {
    this._tagService.GetChildDirectories(1018).subscribe(
      successResponse => {
        this.BaseDirectories = successResponse.data;
      },
      errorResponse => {
        console.log("Service FAIL subscription response")
        console.log(errorResponse);
      }
    );
  }

  public SelectTag(id : number){
    this._explorerService.AddTagToCurrentSearch(id);
  }
}
