import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '../Services/Response/Response';
import { NoteDetail} from '../Services/Note Service/Models/NoteDetail';
import { NoteServiceService } from '../Services/Note Service/note-service.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  note : Response<NoteDetail> = new Response<NoteDetail>();

  id : number = 0;

  constructor(private route : ActivatedRoute, private _noteService : NoteServiceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      this.id = params['id'];
      this._noteService.GetNote(this.id).subscribe( response => {
        this.note = response;
        console.log(this.note);
      });
    });
  }

}
