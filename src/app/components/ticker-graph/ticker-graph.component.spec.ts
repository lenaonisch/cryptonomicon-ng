import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TickerGraphComponent } from './ticker-graph.component';

describe('TickerGraphComponent', () => {
  let component: TickerGraphComponent;
  let fixture: ComponentFixture<TickerGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TickerGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TickerGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
