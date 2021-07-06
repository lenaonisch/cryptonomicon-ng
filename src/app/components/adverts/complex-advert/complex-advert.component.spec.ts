import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexAdvertComponent } from './complex-advert.component';

describe('ComplexAdvertComponent', () => {
  let component: ComplexAdvertComponent;
  let fixture: ComponentFixture<ComplexAdvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplexAdvertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexAdvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
