import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03PersonalPronounsWorksheet4Component } from './std03-personal-pronouns-worksheet4.component';

describe('Std03PersonalPronounsWorksheet4Component', () => {
  let component: Std03PersonalPronounsWorksheet4Component;
  let fixture: ComponentFixture<Std03PersonalPronounsWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03PersonalPronounsWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03PersonalPronounsWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
