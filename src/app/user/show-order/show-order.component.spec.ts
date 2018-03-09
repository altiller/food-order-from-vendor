import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOrderComponent } from './show-order.component';

describe('ShowOrderComponent', () => {
  let component: ShowOrderComponent;
  let fixture: ComponentFixture<ShowOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});