import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DesignutilityService } from 'src/app/appservices/designutility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  public updateName:any;
  public observeData1 :any;
  public observeData2 :any;
  public subjectData1 :any;
  public subjectData2 :any;
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


  observeDataEvent(){
    let observDataUpdate = new Observable<any>(observer =>
      observer.next(Math.floor(Math.random()*99)+1)
    );
    observDataUpdate.subscribe(val =>this.observeData1 = val);
    observDataUpdate.subscribe(val => this.observeData2 = val);

  }
  subjectDataEvent(){
    let subDataUpdate = new Subject<any>();
    
    subDataUpdate.subscribe(val =>this.subjectData1 = val);
    subDataUpdate.subscribe(val =>this.subjectData2 = val);
    subDataUpdate.next(Math.floor(Math.random()*99)+1);
  }
}
