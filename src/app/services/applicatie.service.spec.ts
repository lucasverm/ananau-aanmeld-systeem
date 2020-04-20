import { TestBed } from '@angular/core/testing';

import { ApplicatieService } from './applicatie.service';

describe('ApplicatieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplicatieService = TestBed.get(ApplicatieService);
    expect(service).toBeTruthy();
  });
});
