import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpComponent } from './emp/emp.component';

@NgModule({
  declarations: [
    EmpListComponent,
    EmpComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ModuleOneModule { }
