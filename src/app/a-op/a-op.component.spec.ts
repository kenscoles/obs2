import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AOpComponent } from './a-op.component';

describe('AOpComponent', () => {
  let component: AOpComponent;
  let fixture: ComponentFixture<AOpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AOpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AOpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
