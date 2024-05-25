import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JserverComponent } from './jserver.component';

describe('JserverComponent', () => {
  let component: JserverComponent;
  let fixture: ComponentFixture<JserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JserverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
