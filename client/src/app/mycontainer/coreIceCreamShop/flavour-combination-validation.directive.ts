import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

import { IceCreamFlavour } from "src/app/models/ice-cream-flavour";

export const flavourCombinationValidation = (control: AbstractControl): ValidationErrors | null => {
    console.log(control);
    
    let mintChocolateChip = control.get('MintChocolateChip');
    let strawberry = control.get('Strawberry');
    let cookiesAndCream = control.get('CookiesAndCream');
    let mooseTracks = control.get('MooseTracks');
    let vanilla = control.get('Vanilla');
    // let cookieDough = control.get('CookieDough');
    //let sugarCone = group.get('iceBaseSelectCntrl');
    let finalVal = mintChocolateChip.value !== null && strawberry.value !== null ? {'required':'We will not give Strawberry and Mint Chocolate Chip flavours together'}:null;
    
    finalVal = finalVal === null && cookiesAndCream.value !== null && mooseTracks.value !== null && vanilla.value !== null ? {'required':'We will not give Cookies And Cream, Moose Tracks, and Vanilla together.'}:finalVal;
  //console.log(sugarCone);
    return finalVal;
    };