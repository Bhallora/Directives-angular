import {
  Directive,
  Input,
  ElementRef,
  Renderer2,
  HostListener
} from "@angular/core";
import { NgControl } from "@angular/forms";
@Directive({
  selector: "[appCreditcardInput]"
})
export class CreditcardInputDirective {
  constructor(private elem: ElementRef, private renderer: Renderer2) {}
  public counter: number = 0;
  public temp: string = "";
  public location: number = 0;
  public location1: number = 0;
  public location2: number = 0;

  @HostListener("click", ["$event"]) handleClicker(event: KeyboardEvent) {
    this.location = this.elem.nativeElement.selectionStart;
    console.log(this.location);
  }

  @HostListener("paste", ["$event"]) blockPaste(event: KeyboardEvent) {
    event.preventDefault();
  }

  @HostListener("copy", ["$event"]) blockCopy(event: KeyboardEvent) {
    event.preventDefault();
  }

  @HostListener("cut", ["$event"]) blockCut(event: KeyboardEvent) {
    event.preventDefault();
  }

  @HostListener("select", ["$event"]) onSelect(event: KeyboardEvent) {
    let startPosition = this.elem.nativeElement.selectionStart;
    console.log(startPosition);
    let endPosition = this.elem.nativeElement.selectionEnd;
    console.log(endPosition);
  }

  @HostListener("window:keydown", ["$event"]) keyEvent(event: KeyboardEvent) {
    this.location2 = this.elem.nativeElement.selectionEnd;
    if (event.keyCode == 8) {
      // event.preventDefault();

      //  if(this.elem.nativeElement.value.length!== this.location)
      //   {
      //     this.elem.nativeElement.value =
      //       this.elem.nativeElement.value.substr(0, this.location - 1) +
      //       this.elem.nativeElement.value.substr(
      //         this.location,
      //         this.elem.nativeElement.value.length + 1
      //       );}

      // }
      // // {return;}
      // else
      if (this.elem.nativeElement.value.length == this.location2) {
        event.preventDefault();
        if (
          this.location2 == 15 ||
          this.location2 == 10 ||
          this.location2 == 5
        ) {
          this.elem.nativeElement.value = this.elem.nativeElement.value.slice(
            0,
            -1
          );
        } else {
          this.elem.nativeElement.value = this.elem.nativeElement.value.slice(
            0,
            -1
          );
        }
      }

      // else if(this.elem.nativeElement.value.length!== this.location)
      //   { event.preventDefault();
      //     this.elem.nativeElement.value =
      //       this.elem.nativeElement.value.substr(0, this.location - 1) +
      //       this.elem.nativeElement.value.substr(
      //         this.location,
      //         this.elem.nativeElement.value.length + 1
      //       );}
    }
  }

  @HostListener("input", ["$event"]) onInputChange(event) {
    let initialValue = this.elem.nativeElement.value;
    this.elem.nativeElement.value = initialValue.replace(/[^0-9 * -]*/g, "");
    this.counter = this.elem.nativeElement.value.length;
    console.log(this.counter);
    this.location1 = this.elem.nativeElement.selectionStart;
    console.log(this.location1);

    if (initialValue !== this.elem.nativeElement.value) {
      // event.stopPropagation();
      event.preventDefault();
    }

    if (this.counter > 19 && initialValue === this.elem.nativeElement.value) {
      this.elem.nativeElement.value = this.elem.nativeElement.value.slice(
        0,
        -1
      );
    }
    if (this.counter > 14 && this.location1 > 5 && this.location1 < 15) {
      this.elem.nativeElement.value =
        this.elem.nativeElement.value.substring(0, this.location1 - 1) +
        "*" +
        this.elem.nativeElement.value.substring(
          this.location1,
          this.elem.nativeElement.value.length + 1
        );
    }

    if (this.counter > 0 && this.counter < 20) {
      if (this.counter > 4 && this.counter < 15) {
        if (this.counter == 5 || this.counter == 10) {
          this.temp = this.elem.nativeElement.value.slice(0, -1) + "-" + "*";
        } else if (this.counter == 14) {
          this.temp = this.elem.nativeElement.value.slice(0, -1) + "*" + "-";
        } else {
          this.temp = this.elem.nativeElement.value.slice(0, -1) + "*";
        }
      } else if (this.counter < 5 || this.counter > 14) {
        this.temp = this.elem.nativeElement.value;
      }

      this.elem.nativeElement.value = this.temp;
    }
  }
}
// }}
