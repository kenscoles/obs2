import { Directive, ElementRef, HostListener, Input, input } from '@angular/core';

@Directive({
  selector: '[appLightbox]',
  standalone: true
})
export class LightboxDirective {

  constructor(private elementRef: ElementRef) { }
  myHighlightColor = input<string>("blue")
  @Input() highlightColor: string = "blue";
  // Method decorator()
  @HostListener('mouseover') onMouseOver() {
    this.elementRef.nativeElement.style.border = `1px solid ${this.highlightColor}`;
  }

  @HostListener('mouseout') onMouseOut() {
    this.elementRef.nativeElement.style.border = '1px solid yellow';
  }
}
