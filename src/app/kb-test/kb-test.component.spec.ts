import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KbTestComponent } from './kb-test.component';

describe('KbTestComponent', () => {
  let component: KbTestComponent;
  let fixture: ComponentFixture<KbTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KbTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KbTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
