import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Stap6Component } from './stap6.component';

describe('Stap6Component', () => {
  let component: Stap6Component;
  let fixture: ComponentFixture<Stap6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stap6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Stap6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
