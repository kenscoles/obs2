import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BOpComponent } from './b-op.component';

describe('BOpComponent', () => {
  let component: BOpComponent;
  let fixture: ComponentFixture<BOpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BOpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BOpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
