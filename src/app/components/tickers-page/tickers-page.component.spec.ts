import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TickersPageComponent } from './tickers-page.component';

describe('TickersPageComponent', () => {
  let component: TickersPageComponent;
  let fixture: ComponentFixture<TickersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TickersPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TickersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
