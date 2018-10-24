import { Component, OnInit, Input } from '@angular/core';
import { Response } from '../Services/Response/Response';
import { TagDetail} from '../Services/Tag Service/Models/TagDetail';
import { ExplorerService } from '../Services/Explorer Service/explorer.service';
import { IExplorerListener } from '../Services/Explorer Service/Models/IExplorerListener';

@Component({
  selector: 'app-tag-explorer',
  templateUrl: './tag-explorer.component.html',
  styleUrls: ['./tag-explorer.component.scss']
})
export class TagExplorerComponent implements OnInit {

  constructor(private _explorerService : ExplorerService) { }

  ngOnInit() {

  }
}
