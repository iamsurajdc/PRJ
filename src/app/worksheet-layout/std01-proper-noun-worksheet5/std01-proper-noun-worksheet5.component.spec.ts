import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01ProperNounWorksheet5Component } from './std01-proper-noun-worksheet5.component';

describe('Std01ProperNounWorksheet5Component', () => {
  let component: Std01ProperNounWorksheet5Component;
  let fixture: ComponentFixture<Std01ProperNounWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01ProperNounWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01ProperNounWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
