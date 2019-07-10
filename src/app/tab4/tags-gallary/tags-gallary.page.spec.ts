import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsGallaryPage } from './tags-gallary.page';

describe('TagsGallaryPage', () => {
  let component: TagsGallaryPage;
  let fixture: ComponentFixture<TagsGallaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagsGallaryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsGallaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
