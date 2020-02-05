import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test1Component } from './test1.component';
import { ChangeColorDirective } from '../change-color.directive';
import {InputFilterDirective} from'../input-filter.directive';
import { CreditcardInputDirective } from '../creditcard-input.directive';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [Test1Component,InputFilterDirective,CreditcardInputDirective,ChangeColorDirective],
  imports: [
    CommonModule, FormsModule
  ],
  exports:[Test1Component]
})
export class Test1Module { }
