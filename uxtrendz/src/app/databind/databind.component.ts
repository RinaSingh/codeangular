import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {
@Input() myBtnColor2:any;
  constructor() { }

  ngOnInit(): void {
  }

}
