import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  public isDisabled = true;
  public mainId ="#main-container"
  constructor() { }

  ngOnInit(): void {
  }

}
