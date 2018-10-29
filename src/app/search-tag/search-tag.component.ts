import { Component, OnInit, Input } from '@angular/core';
import { TagSummary } from '../Services/Tag Service/Models/TagSummary';
import { ExplorerService } from '../Services/Explorer Service/explorer.service';

@Component({
  selector: 'app-search-tag',
  templateUrl: './search-tag.component.html',
  styleUrls: ['./search-tag.component.scss']
})
export class SearchTagComponent implements OnInit {

  @Input()
  Tag : TagSummary = new TagSummary();

  constructor(private _explorerService : ExplorerService) { }

  ngOnInit() {
  }

  RemoveTagFromSearch(){
    this._explorerService.RemoveTagFromCurrentSearch(this.Tag.tagId);
  }

}
