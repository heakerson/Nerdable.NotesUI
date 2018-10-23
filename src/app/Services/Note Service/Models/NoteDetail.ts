import { NoteBase } from "./NoteBase";
import { TagSummary } from "../../Tag Service/Models/TagSummary";

export class NoteDetail extends NoteBase{
    public noteId : number;
    public createdByUserId : number;
    public tags : TagSummary[];

    constructor(){
        super();

        this.noteId = 0;
        this.createdByUserId = 0;
        this.tags = [];
    }
}