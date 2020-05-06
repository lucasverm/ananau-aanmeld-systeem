import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Stap4Component } from './stap4.component';

describe('Stap4Component', () => {
  let component: Stap4Component;
  let fixture: ComponentFixture<Stap4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stap4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Stap4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
