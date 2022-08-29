import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

import { IceCreamFlavour } from "src/app/models/ice-cream-flavour";


export const flavourCombinationValidation = (group:FormGroup): ValidationErrors | null => {
      let iceBaseSelection = group.get('iceBaseGroup.iceBaseSelectCntrl').value;
      
      let mintChocolateChip = group.get('iceFlavourGroup.MintChocolateChip').value;
      let strawberry = group.get('iceFlavourGroup.Strawberry').value;
      let cookiesAndCream = group.get('iceFlavourGroup.CookiesAndCream').value;
      let mooseTracks = group.get('iceFlavourGroup.MooseTracks').value;
      let vanilla = group.get('iceFlavourGroup.Vanilla').value;
      let cookieDough = group.get('iceFlavourGroup.CookieDough').value;
      let finalVal = mintChocolateChip !== null && strawberry !== null ? {'required':'We will not give Strawberry and Mint Chocolate Chip flavours together'}:null;
      finalVal = finalVal === null && (cookiesAndCream !== null && mooseTracks !== null && vanilla !== null) && iceBaseSelection !== "CakeCone" ? {'required':'We will not give Cookies And Cream, Moose Tracks, and Vanilla together.'}:finalVal;
      finalVal = finalVal === null && (iceBaseSelection == "SugarCone" && cookieDough !== null)? {'required':'We will not give Cookie Dough flavour in the Sugar Cone base.'}:finalVal;
      return finalVal;
    };