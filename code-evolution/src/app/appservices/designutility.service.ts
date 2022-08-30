import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignutilityService {
 
  constructor() { }
  userUpdateName = new EventEmitter();
  //userUpdateName = new Subject();
  //userUpdateName = new BehaviorSubject('Shreya Singh');
  raiseUserUpdate(data:any){
    //this.userUpdateName.next(data);
    this.userUpdateName.emit(data);
  }
}
