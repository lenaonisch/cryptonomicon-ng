import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconedButtonComponent } from './iconed-button.component';

describe('IconedButtonComponent', () => {
  let component: IconedButtonComponent;
  let fixture: ComponentFixture<IconedButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconedButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
