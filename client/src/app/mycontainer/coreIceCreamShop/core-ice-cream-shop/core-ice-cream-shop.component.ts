import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CoreIceCreamShopService } from 'src/app/appServices/core-ice-cream-shop.service';
import { IceCreamBase } from '../../../models/ice-cream-base';
import { IceCreamFlavour } from '../../../models/ice-cream-flavour';
import { flavourCombinationValidation } from '../flavour-combination-validation.directive';
import {flavourGlobalValidation} from './flavour-validation.directive';

//user interface
interface selectUser {
  userFullName: string
}

@Component({
  selector: 'app-core-ice-cream-shop',
  templateUrl: './core-ice-cream-shop.component.html',
  styleUrls: ['./core-ice-cream-shop.component.css']
})

export class CoreIceCreamShopComponent implements OnInit {
  isValidate:boolean = false;
  selectedBase: string | undefined;
  selectedOption: string | undefined;
  coreIceCreamInfo: any = {};
  scoopePaymentAmount = 0;
  basePaymentAmount = 0;
  baseList: any;
  flavourList: any;
  tokenValue =''
  users: selectUser[] = [
    { userFullName: 'Alanna Mosvani' },
    { userFullName: 'Mat Cauthon' },
    { userFullName: 'Moiraine Damodred'}
  ];
  selectedFlavours: any = {};
  scoopeRate =[0,2,3,3.50,3.80];
  isDisabled:Boolean = false;
  
  // firstFormGroup:FormGroup;
  // secondFormGroup:FormGroup
  iceParlorForm:FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _iceCreamService: CoreIceCreamShopService,
  ) {
    this.baseList = Object.keys(IceCreamBase).filter(key => isNaN(Number(key))).map(key => { return { name: key } });
    this.flavourList = Object.keys(IceCreamFlavour).filter(key => isNaN(Number(key))).map(key => { return { name: key } });
    this.createFlavoursObject();

  }

  ngOnInit(): void {
    //Reactive Form
    // this.firstFormGroup = this._formBuilder.group({
    //   optionCtrl: ['', Validators.required],
    //   radioCtrl: ['', Validators.required]
    // });
    //Dynamic generated Form control
    let form ={}
    let formCntrl = Object.keys(this.selectedFlavours);
    formCntrl.forEach(item => form[item] = new FormControl('',Validators.compose([
          Validators.maxLength(1),
          Validators.pattern('[1-4]')
        ])) );
    // this.secondFormGroup = this._formBuilder.group(form,{validators:[flavourValidation,flavourCombinationValidation]});
    
    this.iceParlorForm = new FormGroup({
        'iceBaseGroup': new FormGroup({
          'userSelectCntrl':new FormControl(null, Validators.required),
          'iceBaseSelectCntrl': new FormControl(null,Validators.required),
        }),
        'iceFlavourGroup': new FormGroup(form,{validators:[flavourGlobalValidation,flavourCombinationValidation]}) 
    })
    
  }
  //,{validators:this.baseIce}
   baseIce(group:AbstractControl):{[key:string]:any}|null{
    console.log("rina group");
    console.log(group);
    const baseIceCntrl = group.get('iceBaseSelectCntrl');
    const iceFlavCntrl = group.get('CookieDough');
    return baseIceCntrl && iceFlavCntrl ? {'error':'Not Valid Choose'} : null
   }
  //Intial create flavour object
  createFlavoursObject() {
    for (let object of this.flavourList) {
      this.selectedFlavours[object.name] = null;
    }
  }

  //Proceed to payment
  goToPayment() {
    this.coreIceCreamInfo.paymentAmount = this.scoopePaymentAmount + this.basePaymentAmount;
    this.coreIceCreamInfo.base = this.selectedBase;
    this.coreIceCreamInfo.flavours = this.createFlavourArray();
    //this.coreIceCreamInfo.user =this.selectedOption;
    console.log(this.coreIceCreamInfo);
    this._iceCreamService.sendInfo(this.coreIceCreamInfo,this.tokenValue).subscribe(res => console.log(res))
  }
  //Select on change token value per user
  onChange(val:any){
    if(val === 'Alanna Mosvani'){
      this.tokenValue = 'Basic YW1vc3Zhbmk6VFc5emRtRnVhWGg0'
    }else if(val === 'Mat Cauthon'){
      this.tokenValue = 'Basic bWNhdXRob246UTJGMWRHaHZibmg0'
    }else if(val === 'Moiraine Damodred'){
      this.tokenValue = 'Basic bWRhbW9kcmVkOlJHRnRiMlJ5WldSNA'
    }
  }
  // selected flavour name
  createFlavourArray(): any[] {
    let array = []
    let keys = Object.keys(this.selectedFlavours);
    for (let key of keys) {
      if (this.selectedFlavours[key]) {
        for (let i = 0; i < this.selectedFlavours[key]; i++) {
          array.push(key);
        }
      }
    }
    return array;
  }
  //Base amount calculation
  baseAmount(){
    if(this.selectedBase === "WaffleCone"){
      this.basePaymentAmount = 4 
    }else{
      this.basePaymentAmount = 3
    }
    
  }
  // Scoope Amount Calculation
  scoopeAmount() {
    let scoopeCount:any = this.selectedFlavours ? Object.values(this.selectedFlavours).filter((item:any) => !isNaN(item)).reduce((a:number,b:number) => a + b,0):0;
    this.scoopePaymentAmount = scoopeCount >= this.scoopeRate.length ? 0 : this.scoopeRate[scoopeCount];
  }

  //Validation (Rough Code)
  validateFlavours(){
    // let selectedScoope = this.createFlavourArray();
    // let CookieDoughFlav = selectedScoope.find( item => item === 'CookieDough');
    // let uniqueArray = [...new Set(selectedScoope)].filter(item => item === 'CookiesAndCream'||item === 'MooseTracks' || item === 'Vanilla')
    //let allComboFlavour = uniqueArray.every
    // console.log(this.selectedBase === "SugarCone" || CookieDoughFlav);
    // if(this.selectedBase === "SugarCone" || CookieDoughFlav){
    //   this.isValidate = true;
    // }
    // else if(this.selectedBase === "CakeCone" && (uniqueArray.indexOf('Vanilla') !== -1 && uniqueArray.indexOf('MooseTracks') !== -1 && uniqueArray.indexOf('CookiesAndCream') !== -1)){
    //   this.isValidateOther = true;
      
    // }
   this.scoopeAmount();

  }
  //Rough code
  onSubmit(){
    
    console.log(this.iceParlorForm);
  }
}
