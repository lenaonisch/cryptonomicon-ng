import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalAdvertComponent } from './conditional-advert.component';

describe('ConditionalAdvertComponent', () => {
  let component: ConditionalAdvertComponent;
  let fixture: ComponentFixture<ConditionalAdvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionalAdvertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalAdvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
