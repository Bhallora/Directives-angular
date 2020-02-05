import { Directive, ElementRef, OnInit,Renderer2} from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective implements OnInit {

  constructor( private elem:ElementRef, private renderer:Renderer2){}

 ngOnInit(){this.renderer.setStyle(this.elem.nativeElement,'color','pink');} 

}





