import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedUiLogoComponent } from './shared-ui-logo.component';

describe('SharedUiLogoComponent', () => {
  let component: SharedUiLogoComponent;
  let fixture: ComponentFixture<SharedUiLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedUiLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedUiLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
