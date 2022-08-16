import { Component, ViewChild} from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(ChildComponent) viewData !:ChildComponent;
  constructor(){
    
  }
  mainHeading ="Have you tried our new Express Book & Pay?";
  sum = { 
    a:10,
    b:20
  }
  
  nameData ="";
  markData = "";
  profileDetails = {
    name:"",
    mark:""
  }
  response:any;
  
  TransferDataToChild (name:any,mark:any){
    this.nameData = name;
    this.markData = mark;
    this.profileDetails.name = name;
    this.profileDetails.mark = mark;
    this.response = this.viewData.updateList({
      name:name,
      mark:mark
    });
  }

  
}
