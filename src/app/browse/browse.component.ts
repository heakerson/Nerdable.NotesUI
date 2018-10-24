import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from '../Services/Note Service/note-service.service';
import { TagService } from '../Services/Tag Service/tag.service';
import { TagSummary } from '../Services/Tag Service/Models/TagSummary';
import { Response } from '../Services/Response/Response'
import { NoteDetail } from '../Services/Note Service/Models/NoteDetail';
import { TagDetail } from '../Services/Tag Service/Models/TagDetail';
import { ExplorerService } from '../Services/Explorer Service/explorer.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {

  notes : Response<NoteDetail[]> = new Response<NoteDetail[]>();
  selectionString : string = "Select a tag";
  selectedTagId : number = 0;
  selectedTagTitle : string = " ";
  initialSelectionMade : boolean = false;
  selectedTag : Response<TagDetail> = new Response<TagDetail>();

  constructor(private _noteService : NoteServiceService, public _explorerService : ExplorerService) { }

  ngOnInit() {
    this._explorerService.GetTopTags();
  }

  public SelectTag(id : number){
    this._explorerService.SelectTag(id);
    this.initialSelectionMade = true;
  }

  public HardDeleteNote(id : number){
    this._noteService.HardDeleteNote(id).subscribe(
      successResponse => {
        this.SelectTag(this._explorerService.SelectedTag.tagId);
      }
    );
  }
}
