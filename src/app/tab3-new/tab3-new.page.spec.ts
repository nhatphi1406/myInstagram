import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab3NewPage } from './tab3-new.page';

describe('Tab3NewPage', () => {
  let component: Tab3NewPage;
  let fixture: ComponentFixture<Tab3NewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab3NewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab3NewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
