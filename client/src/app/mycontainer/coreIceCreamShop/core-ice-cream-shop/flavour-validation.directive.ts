import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";


export const flavourGlobalValidation: ValidatorFn = (group: FormGroup): ValidationErrors | null => {
    
    let control = group.get('iceFlavourGroup');
    let finalVal =Object.values(control.value).find(flav => flav)?null:{'required':'Please select at least one scoope'};
    let maxScoopes = Object.values(control.value).filter(item => item).reduce((a:any,b:any) => a+b,0) 
    finalVal = !finalVal && maxScoopes > 4 ? {'required':'Maximum 4 scoopes are allow'} : finalVal;
    
    console.log(finalVal);
     return finalVal;
};