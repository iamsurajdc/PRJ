import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01PersonalPronounsWorksheet2Component } from './std01-personal-pronouns-worksheet2.component';

describe('Std01PersonalPronounsWorksheet2Component', () => {
  let component: Std01PersonalPronounsWorksheet2Component;
  let fixture: ComponentFixture<Std01PersonalPronounsWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01PersonalPronounsWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01PersonalPronounsWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
