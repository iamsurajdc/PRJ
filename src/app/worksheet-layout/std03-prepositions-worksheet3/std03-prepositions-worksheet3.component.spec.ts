import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03PrepositionsWorksheet3Component } from './std03-prepositions-worksheet3.component';

describe('Std03PrepositionsWorksheet3Component', () => {
  let component: Std03PrepositionsWorksheet3Component;
  let fixture: ComponentFixture<Std03PrepositionsWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03PrepositionsWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03PrepositionsWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
