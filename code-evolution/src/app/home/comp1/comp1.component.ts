import { Component, OnInit,NgModule } from '@angular/core';
import { DesignutilityService } from 'src/app/appservices/designutility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
public updateName :any;
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
