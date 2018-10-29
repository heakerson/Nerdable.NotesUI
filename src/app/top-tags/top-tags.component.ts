import { Component, OnInit } from '@angular/core';
import { ExplorerEvent } from '../Services/Explorer Service/Models/ExplorerEvent';
import { ExplorerService } from '../Services/Explorer Service/explorer.service';

@Component({
  selector: 'app-top-tags',
  templateUrl: './top-tags.component.html',
  styleUrls: ['./top-tags.component.scss']
})
export class TopTagsComponent implements OnInit {

  initialSelectionMade : boolean = false;

  constructor(private _explorerService : ExplorerService) { }

  ngOnInit() {
  }

  public SelectTag(id : number){
    this._explorerService.AddTagToCurrentSearch(id);
    this.initialSelectionMade = true;
  }

}
