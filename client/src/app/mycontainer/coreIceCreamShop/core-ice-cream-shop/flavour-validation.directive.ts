import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";


export const flavourGlobalValidation: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    
    let finalVal =Object.values(control.value).find(flav => flav)?null:{'required':'Please select at least one scoope'};
    let value1 = Object.values(control.value).filter(item => item).reduce((a:any,b:any) => a+b,0) 
    finalVal = !finalVal && value1 > 4 ? {'required':'Maximum 4 scoopes are allow'} : finalVal;
    console.log(finalVal);
     return finalVal;
};