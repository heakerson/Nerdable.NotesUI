import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public Username : string = "heakerson";
  public UserId : number = 1;

  constructor() { }

}
