import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagExplorerComponent } from './tag-explorer.component';

describe('TagExplorerComponent', () => {
  let component: TagExplorerComponent;
  let fixture: ComponentFixture<TagExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagExplorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
