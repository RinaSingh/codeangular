import { Component, OnInit } from '@angular/core';
import {IceCreamBase} from '../../../models/ice-cream-base';
import {IceCreamFlavour} from '../../../models/ice-cream-flavour';

@Component({
  selector: 'app-ice-cream-base',
  templateUrl: './ice-cream-base.component.html',
  styleUrls: ['./ice-cream-base.component.css']
})
export class IceCreamBaseComponent implements OnInit {
  public enumIceBase = IceCreamBase;
  public iceBase = IceCreamBase.SugarCone;
  constructor() { }

  ngOnInit(): void {
    console.log(this.iceBase);
    
    console.log(this.keys());
  }
  keys() : Array<string> {
      var keys = Object.keys(this.enumIceBase);
      var values = keys.slice(0,keys.length/2)
      //return keys.slice(keys.length / 2);
      return values
  }
  //https://stackoverflow.com/questions/38554562/how-can-i-use-ngfor-to-iterate-over-typescript-enum-as-an-array-of-strings
}
