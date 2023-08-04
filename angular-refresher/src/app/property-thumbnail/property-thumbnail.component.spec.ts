import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyThumbnailComponent } from './property-thumbnail.component';

describe('PropertyThumbnailComponent', () => {
  let component: PropertyThumbnailComponent;
  let fixture: ComponentFixture<PropertyThumbnailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyThumbnailComponent]
    });
    fixture = TestBed.createComponent(PropertyThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
