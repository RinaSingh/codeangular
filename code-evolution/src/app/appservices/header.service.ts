import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { 
   
  }
  addressNav = new BehaviorSubject(false);//header contact
  mainNav = new BehaviorSubject(true);//header Nav
  goBackNav = new BehaviorSubject(false);//Go back content
  creadNav = new BehaviorSubject(true);//Login or register
}
