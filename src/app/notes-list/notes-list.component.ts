import { Component, OnInit } from '@angular/core';
import { ExplorerService } from '../Services/Explorer Service/explorer.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  constructor(private _explorerService : ExplorerService) { }

  ngOnInit() {
  }

}
