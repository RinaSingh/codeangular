import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {IceCreamBase} from '../../../models/ice-cream-base';
import {IceCreamFlavour} from '../../../models/ice-cream-flavour';

interface selectUser {
  userValue:string,
  userFullName:string
}
@Component({
  selector: 'app-core-ice-cream-shop',
  templateUrl: './core-ice-cream-shop.component.html',
  styleUrls: ['./core-ice-cream-shop.component.css']
})
export class CoreIceCreamShopComponent implements OnInit {
  userName ="R"
  selectedBase: string | undefined;
  baseAmount:any;
  selectedOption:string | undefined;
  users:selectUser[]=[
    {userValue:'Basic YW1vc3Zhbmk6VFc5emRtRnVhWGg0',userFullName:'Alanna Mosvani'},
    {userValue:'Basic bWNhdXRob246UTJGMWRHaHZibmg0',userFullName:'Mat Cauthon'},
    {userValue:'Basic bWRhbW9kcmVkOlJHRnRiMlJ5WldSNA==',userFullName:'Moiraine Damodred'}
  ];
  scoope = [
    {'quantity':'1', 'price':'2'},
    {'quantity':'2', 'price':'3'},
    {'quantity':'3', 'price':'3.50'},
    {'quantity':'4', 'price':'3.80'},
  ];
  paymentAmount = 10;
  baseList:any;
  flavourList:any;
  action = 0;
  selectedFlavours: any = {};
  
  //Stepper disable code
  firstFormGroup = this._formBuilder.group({
    optionCtrl: ['', Validators.required],
    radioCtrl:['', Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = true;
  //Close stepper disable code
  constructor(
    private _formBuilder: FormBuilder,
    ) { 
      this.baseList = Object.keys(IceCreamBase).filter( key => isNaN( Number( key ))).map( key => { return { name: key } });
      this.flavourList = Object.keys(IceCreamFlavour).filter( key => isNaN( Number( key ))).map( key => { return { name: key } });
      this.createFlavoursObject();
      
    }
  
  ngOnInit(): void {
    
    
  }
  createFlavoursObject() {
    for(let object of this.flavourList) {
      this.selectedFlavours[object.name] = null;
    }
  }
  payment() {
    let object: any = {};
    object.paymentAmount = this.paymentAmount;
    object.base = this.selectedBase;
    object.flavours = this.createFlavourArray();
    console.log(object);
  }

  createFlavourArray(): any[] {
    let array = []
    let keys = Object.keys(this.selectedFlavours);
    for(let key of keys) {
      if(this.selectedFlavours[key]) {
        for(let i=0; i< this.selectedFlavours[key]; i++) {
          array.push(key);
        }
      }
    }
    return array;
  }
scoopeAmount(){
  let keys = Object.keys(this.selectedFlavours);
  console.log(keys)                            
}
  onItemChange(item:any){
    this.baseAmount = item === "WaffleCone"? 4 : 3
    console.log(this.baseAmount);
  }

}
