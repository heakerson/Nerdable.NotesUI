import { NoteBase } from './NoteBase';
import { TagSummary } from '../../Tag Service/Models/TagSummary';

export class NoteCreationModel extends NoteBase{
    public createdByUserId : number = 0;
    public tags : TagSummary[] = [];

    // constructor(title : string, content : string, createdByUserId : number, tags : TagSummary[], lastUpdated : number = Date.now(), isPublic : boolean = true, isDeleted : boolean = false)
    // {
    //     super(title, content, lastUpdated, isPublic, isDeleted);

    //     this.createdByUserId = createdByUserId;
    //     this.tags = tags;
    // }
}