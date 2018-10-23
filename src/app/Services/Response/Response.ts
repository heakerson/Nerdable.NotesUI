import { ReturnCode } from "./ReturnCode";

export class Response<TResponse>{
    //public Data : TResponse;
    public data : TResponse;
    //public data : TResponse = {} as TResponse;
    public returnMessage : string = "";
    public returnCode : ReturnCode = ReturnCode.None;
    public returnCodeString : string = "";
    public success : Boolean = false;
}