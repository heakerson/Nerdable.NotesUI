import { NoteBase } from "./NoteBase";
import { TagSummary } from "../../Tag Service/Models/TagSummary";

export class NoteDetail extends NoteBase{
    public noteId : number = 0;
    public createdByUserId : number = 0;
    public tags : TagSummary[] = [];
}