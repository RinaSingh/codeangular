import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CoreIceCreamShopService } from 'src/app/appServices/core-ice-cream-shop.service';
import { IceCreamBase } from '../../../models/ice-cream-base';
import { IceCreamFlavour } from '../../../models/ice-cream-flavour';
import { flavourCombinationValidation } from '../flavour-combination-validation.directive';
import {flavourValidation} from './flavour-validation.directive';

//user interface
interface selectUser {
  userValue: string,
  userFullName: string
}

@Component({
  selector: 'app-core-ice-cream-shop',
  templateUrl: './core-ice-cream-shop.component.html',
  styleUrls: ['./core-ice-cream-shop.component.css']
})

export class CoreIceCreamShopComponent implements OnInit {
  selectedBase: string | undefined;
  selectedOption: string | undefined;
  coreIceCreamInfo: any = {};
  scoopePaymentAmount = 0;
  basePaymentAmount = 0;
  baseList: any;
  flavourList: any;
  tokenValue =''
  users: selectUser[] = [
    { userValue: 'Basic YW1vc3Zhbmk6VFc5emRtRnVhWGg0', userFullName: 'Alanna Mosvani' },
    { userValue: 'Basic bWNhdXRob246UTJGMWRHaHZibmg0', userFullName: 'Mat Cauthon' },
    { userValue: 'Basic bWRhbW9kcmVkOlJHRnRiMlJ5WldSNA==', userFullName: 'Moiraine Damodred' }
  ];
  
  action = 0;
  selectedFlavours: any = {};
  scoopeRate =[0,2,3,3.50,3.80];
  isDisabled:Boolean = false;
 
  //Stepper disable code
  firstFormGroup = this._formBuilder.group({
    optionCtrl: ['', Validators.required],
    radioCtrl: ['', Validators.required]
  });
  secondFormGroup:FormGroup
  isLinear = true;
  //Close stepper disable code

  constructor(
    private _formBuilder: FormBuilder,
    private _iceCreamService: CoreIceCreamShopService
  ) {
    this.baseList = Object.keys(IceCreamBase).filter(key => isNaN(Number(key))).map(key => { return { name: key } });
    this.flavourList = Object.keys(IceCreamFlavour).filter(key => isNaN(Number(key))).map(key => { return { name: key } });
    this.createFlavoursObject();

  }

  ngOnInit(): void {
    //Dynamic generated Form control
    let form ={}
    let formCntrl = Object.keys(this.selectedFlavours);
    formCntrl.forEach(item => form[item] = new FormControl('',Validators.compose([
          Validators.maxLength(1),
          Validators.pattern('[1-4]')
        ])) );
    this.secondFormGroup = this._formBuilder.group(form,{validators:[flavourValidation,flavourCombinationValidation]})
    
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
    this._iceCreamService.sendInfo(this.coreIceCreamInfo).subscribe(res => console.log(res))
  }

  // onChange(val:any){
  //   if(val === 'Alanna Mosvani'){
  //     this.tokenValue = 'Basic YW1vc3Zhbmk6VFc5emRtRnVhWGg0'
  //   }else if(val === 'Mat Cauthon'){
  //     this.tokenValue = 'Basic bWNhdXRob246UTJGMWRHaHZibmg0'
  //   }else if(val === 'Moiraine Damodred'){
  //     this.tokenValue = 'Basic bWRhbW9kcmVkOlJHRnRiMlJ5WldSNA'
  //   }
  // }

  //Reset Form
  goToCancel(){
    //code here
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

  //Validation of iceBases and iceFlavours
  validateFlavours(){
    // console.log(this.secondFormGroup);
    // let selectedScoope = this.createFlavourArray();
    // let CookieDoughFlav = selectedScoope.find( item => item === 'CookieDough');
    // let uniqueArray = [...new Set(selectedScoope)];
    // let condOne = ['Strawberry','MintChocolateChip'];
    // let condOfStrawAndChoco = condOne.every(i => uniqueArray.includes(i));
    // let condTwo = ['CookiesAndCream','MooseTracks','Vanilla'];
    // let allComboFlavour = condTwo.every(i => uniqueArray.includes(i));
    // let cond3 = unique.find( item => (item === 'Strawberry' || item === 'MintChocolateChip'))
    
    //let cond4 = selectedScoope.find( item => (item != 'CookiesAndCream' && item != 'MooseTracks' && item !='Vanilla')||((item ==='CookiesAndCream')&&(item ==='MooseTracks')));
    //console.log(cond33);
    //(this.selectedBase === "CakeCone" && allComboFlavour)
    // if(this.selectedBase === "SugarCone" && CookieDoughFlav){
    //   confirm('We will not give Cookie Dough flavour in the Sugar Cone base.');
    // }else if(condOfStrawAndChoco){
    //   confirm('We will not give Strawberry and Mint Chocolate Chip flavours together');
    // }else if(allComboFlavour){
    //   confirm('We will not give Cookies And Cream, Moose Tracks, and Vanilla together.');
    // }
    
     this.scoopeAmount();

  }
}
