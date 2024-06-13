import { ChangeDetectionStrategy,  ChangeDetectorRef,  Component, input } from '@angular/core';

@Component({
  selector: 'b-op',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p>
    <button (click)="triggerChangeDetection()">B Trigger CD</button>  
    <span>User name: {{user().name}} {{value()}}</span>
    </p>
  `,
  styles: ``
})
export class BOpComponent{
 // @Input() user: any;
  user = input<any>();
  value = input<number>(); // added
  
  constructor(private cdr: ChangeDetectorRef) {
   
  }
// This method marks the component for change detection.
triggerChangeDetection() {
  this.cdr.markForCheck();
  this.updateData()
}

// Event handler that updates the input property.
updateData() {
  var mynew = { 'newValue': this.user().name };
  console.log("in B", mynew)
}

  
  }

