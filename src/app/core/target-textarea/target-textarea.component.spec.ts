import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetTextareaComponent } from './target-textarea.component';

describe('TargetTextareaComponent', () => {
  let component: TargetTextareaComponent;
  let fixture: ComponentFixture<TargetTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
