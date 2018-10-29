import { TagSummary } from "../TagSummary";

export class DirectorySummary extends TagSummary{
    public PathWithTitles : string = "";
    public PathWithIds : string = "";
    public ParentId : number = 0;
    public ParentTitle : string = "";
    public ParentIds : number[] = [];
}