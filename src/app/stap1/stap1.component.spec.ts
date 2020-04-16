import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Stap1Component } from './stap1.component';

describe('Stap1Component', () => {
  let component: Stap1Component;
  let fixture: ComponentFixture<Stap1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stap1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Stap1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
