import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public name ="Rina Singh";
  
  public userData:Array<any> = [];
  public date = new Date();
  
  constructor() { 
    
  }

  ngOnInit(): void {
  }
  peopleList(childPassData:any){
    
    this.userData = childPassData;
    console.log(this.userData);
  }

}
