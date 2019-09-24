import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcustomerPage } from './detailcustomer.page';

describe('DetailcustomerPage', () => {
  let component: DetailcustomerPage;
  let fixture: ComponentFixture<DetailcustomerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailcustomerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailcustomerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
