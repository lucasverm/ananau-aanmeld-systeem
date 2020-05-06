import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Stap3Component } from './stap3.component';

describe('Stap3Component', () => {
  let component: Stap3Component;
  let fixture: ComponentFixture<Stap3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stap3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Stap3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
