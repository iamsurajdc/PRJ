import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03MixedTenseWorksheet4Component } from './std03-mixed-tense-worksheet4.component';

describe('Std03MixedTenseWorksheet4Component', () => {
  let component: Std03MixedTenseWorksheet4Component;
  let fixture: ComponentFixture<Std03MixedTenseWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03MixedTenseWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03MixedTenseWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
