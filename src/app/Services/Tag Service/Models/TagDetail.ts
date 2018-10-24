import { TagUpdateModel } from "./TagUpdateModel";
import { TagSummary } from "./TagSummary";

export class TagDetail extends TagUpdateModel{
    public createdByUserName : string = "";
    public parentTags : TagSummary[] = [];
    public childTags : TagSummary[] = [];
}