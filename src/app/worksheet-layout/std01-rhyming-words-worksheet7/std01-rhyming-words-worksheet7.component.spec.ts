import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01RhymingWordsWorksheet7Component } from './std01-rhyming-words-worksheet7.component';

describe('Std01RhymingWordsWorksheet7Component', () => {
  let component: Std01RhymingWordsWorksheet7Component;
  let fixture: ComponentFixture<Std01RhymingWordsWorksheet7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01RhymingWordsWorksheet7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01RhymingWordsWorksheet7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
