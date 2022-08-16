import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() dataName:any;
  @Input() dataMark:any;
  @Input() myObj:any;
 @Output() titleUpdateFun:EventEmitter<{name:string,mark:string}> = new EventEmitter()
  profileList = [{name:"Rina",mark:"30"}];
  
  updateList(Obj:any){
    this.profileList.push(Obj);
    return Obj.name +' is added to the list';
  }
}
