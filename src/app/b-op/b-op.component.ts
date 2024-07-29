import { ChangeDetectionStrategy,  ChangeDetectorRef,  Component, Input, input, signal } from '@angular/core';

@Component({
  selector: 'b-op',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>This is the B component  Change detection: {{status()}}  CD trigger:{{refreshed()}}</div>
   @if(status()){
      <button (click)="detach()">Detach</button>
    }
    @if(!status()) {
      <button (click)="reattach()">Attach</button>
    }
    
    <button (click)="doNothing()">Do nothing</button> 
    <button (click)="refresh()">refresh</button>
    <span>User name: {{user().name}} Number: {{value()}}</span>
  `,
  styles: `:host {
    display: block;
    background-color: rgb(0, 227, 128);
   }`
})
export class BOpComponent{
  //@Input() user: any;
  user = input<any>();
  value = input<number>(); // added
  status= signal(true);
  refreshed = signal(0)  
  constructor(private cdr: ChangeDetectorRef) {
    setInterval(()=> { this.refresh() }, 5000);
  }
// This method marks the component for change detection.
triggerChangeDetection() {
  this.cdr.markForCheck();
  //this.updateData()
}

// Event handler that updates the input property.
updateData() {
  var mynew = { 'newValue': this.user().name };
  console.log("in B", mynew)
}
doNothing(){}

 detach(){
  this.status.set(false)
  this.cdr.markForCheck();
   this.cdr.detach()
   this.refresh()
} 
reattach(){
  this.status.set(true)
  this.cdr.reattach()

}
refresh() {
  this.refreshed.update (r => r+1)
  this.cdr.detectChanges();
} 
  }

