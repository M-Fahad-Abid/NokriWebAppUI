import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanRegistrationComponent } from './can-registration.component';

describe('CanRegistrationComponent', () => {
  let component: CanRegistrationComponent;
  let fixture: ComponentFixture<CanRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CanRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CanRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
