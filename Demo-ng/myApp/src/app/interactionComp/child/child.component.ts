import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input('nameVal') name:any;
  @Output() myData:EventEmitter<any> = new EventEmitter();
  
  public myObj =[
    {name:'Rina', job:'IT'},
    {name:'Jhon', job:'UPSC'},
    {name:'Rekha', job:'Interior Designer'}

  ];
  constructor() { }

  ngOnInit(): void {
  }
  fireEvent(){
    this.myData.emit(this.myObj);
  }
}
