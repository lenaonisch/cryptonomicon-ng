import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteDependentComponent } from './route-dependent.component';

describe('RouteDependentComponent', () => {
  let component: RouteDependentComponent;
  let fixture: ComponentFixture<RouteDependentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteDependentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteDependentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
