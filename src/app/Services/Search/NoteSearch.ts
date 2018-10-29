export class NoteSearch{
    public DirectoryId : number = 0;
    public DirectFilterIds : number[] = []

    constructor(directoryId : number = 0, directFilterIds : number[] = []){
        this.DirectoryId = directoryId;
        this.DirectFilterIds = directFilterIds;
    }


}