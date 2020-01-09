import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test1Component } from './test1.component';
import { ChangeColorDirective } from '../change-color.directive';



@NgModule({
  declarations: [Test1Component,ChangeColorDirective],
  imports: [
    CommonModule
  ],
  exports:[Test1Component]
})
export class Test1Module { }
