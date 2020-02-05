import { Directive, Input, ElementRef, Renderer2,HostListener} from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appInputFilter]'
})
export class InputFilterDirective {

  
  constructor(private elem:ElementRef, private renderer:Renderer2) { }
 
  @HostListener('input',['$event']) onInputChange(event){

    const initalValue = this.elem.nativeElement.value;
    this.elem.nativeElement.value = initalValue.replace(/[0-9 !@#$%^&*(),.?":{}|<>]*/g, '');
    if ( initalValue !== this.elem.nativeElement.value) {
      event.stopPropagation();
    }



  }

}


