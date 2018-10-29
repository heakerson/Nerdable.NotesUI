import { TagDetail } from "../TagDetail";
import { DirectorySummary } from "./DIrectorySummary";

export class DirectoryDetail extends TagDetail{
    public PathWithTitles : string = "";
    public PathWithIds : string = "";
    public ParentId : number = 0;
    public ParentTitle : string = "";
    public ParentIds : number[] = [];
}