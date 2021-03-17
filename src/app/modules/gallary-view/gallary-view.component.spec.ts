import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallaryViewComponent } from './gallary-view.component';

describe('GallaryViewComponent', () => {
  let component: GallaryViewComponent;
  let fixture: ComponentFixture<GallaryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallaryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallaryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
