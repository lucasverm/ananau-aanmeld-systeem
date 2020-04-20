import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VindApplicatieComponent } from './vind-applicatie.component';

describe('VindApplicatieComponent', () => {
  let component: VindApplicatieComponent;
  let fixture: ComponentFixture<VindApplicatieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VindApplicatieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VindApplicatieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
