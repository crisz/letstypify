import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceTextareaComponent } from './source-textarea.component';

describe('SourceTextareaComponent', () => {
  let component: SourceTextareaComponent;
  let fixture: ComponentFixture<SourceTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
