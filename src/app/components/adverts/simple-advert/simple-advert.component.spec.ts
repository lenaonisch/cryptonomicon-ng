import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleAdvertComponent } from './simple-advert.component';

describe('SimpleAdvertComponent', () => {
  let component: SimpleAdvertComponent;
  let fixture: ComponentFixture<SimpleAdvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleAdvertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleAdvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
