import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03SubjectPredicateWorksheet4Component } from './std03-subject-predicate-worksheet4.component';

describe('Std03SubjectPredicateWorksheet4Component', () => {
  let component: Std03SubjectPredicateWorksheet4Component;
  let fixture: ComponentFixture<Std03SubjectPredicateWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03SubjectPredicateWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03SubjectPredicateWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
