import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signals3Component } from './signals3.component';

describe('Signals3Component', () => {
  let component: Signals3Component;
  let fixture: ComponentFixture<Signals3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Signals3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Signals3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
