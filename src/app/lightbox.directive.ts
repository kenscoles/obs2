import { Directive, ElementRef, HostListener, input } from '@angular/core';

@Directive({
  selector: '[appLightbox]',
  standalone: true
})
export class LightboxDirective {

  constructor(private elementRef: ElementRef) { }
  highlightColor = input<string>("green")
  highlightColor2 = input<string>("yellow")

  // Method decorator()
  @HostListener('mouseover') onMouseOver() {
    this.elementRef.nativeElement.style.border = `1px solid ${this.highlightColor()}`;
  }

  @HostListener('mouseout') onMouseOut() {
    this.elementRef.nativeElement.style.border = `1px solid ${this.highlightColor2()}`;
  }
}
