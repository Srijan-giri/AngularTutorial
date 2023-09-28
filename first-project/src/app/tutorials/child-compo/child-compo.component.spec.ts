import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCompoComponent } from './child-compo.component';

describe('ChildCompoComponent', () => {
  let component: ChildCompoComponent;
  let fixture: ComponentFixture<ChildCompoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildCompoComponent]
    });
    fixture = TestBed.createComponent(ChildCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
