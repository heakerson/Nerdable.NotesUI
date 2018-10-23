export class NoteBase{
    public title : string = "";
    public content : string = "";
    public public : boolean = false;
    public isDeleted : boolean = false;
    public lastUpdated : Date;

    // constructor(title : string, content : string, lastUpdated : number = Date.now(), isPublic : boolean = true, isDeleted : boolean = false){
    //     this.title = title;
    //     this.content = content;
    //     this.lastUpdated = lastUpdated;
    //     this.public = isPublic;
    //     this.isDeleted = isDeleted;
    // }
}