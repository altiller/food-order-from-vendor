import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecipientComponent } from './add-recipient.component';

describe('AddRecipientComponent', () => {
  let component: AddRecipientComponent;
  let fixture: ComponentFixture<AddRecipientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRecipientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecipientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
