import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Stap5Component } from './stap5.component';

describe('Stap5Component', () => {
  let component: Stap5Component;
  let fixture: ComponentFixture<Stap5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stap5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Stap5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
