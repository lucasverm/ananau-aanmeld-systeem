import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicatieBekijkenComponent } from './applicatie-bekijken.component';

describe('ApplicatieBekijkenComponent', () => {
  let component: ApplicatieBekijkenComponent;
  let fixture: ComponentFixture<ApplicatieBekijkenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicatieBekijkenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicatieBekijkenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
