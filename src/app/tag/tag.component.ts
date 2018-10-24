import { Component, OnInit, Input } from '@angular/core';
import { Response } from '../Services/Response/Response';
import { TagSummary } from '../Services/Tag Service/Models/TagSummary';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  @Input()
  Tag : TagSummary = new TagSummary();

  constructor() { }

  ngOnInit() {
  }

}
