import { Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective implements OnInit {

  constructor( private elem:ElementRef){}

 ngOnInit(){(this.elem.nativeElement.style.color='red');} }





