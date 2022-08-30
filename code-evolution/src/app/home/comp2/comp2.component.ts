import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from 'src/app/appservices/designutility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  public updateName:any;
  constructor(private _designUtility:DesignutilityService) { 
    this._designUtility.userUpdateName.subscribe(value =>
        this.updateName = value
      )
  }

  ngOnInit(): void {
  }
  updateUserName(){
    this._designUtility.raiseUserUpdate(this.updateName);
    console.log("My Name:"+ this.updateName);
 }
}
