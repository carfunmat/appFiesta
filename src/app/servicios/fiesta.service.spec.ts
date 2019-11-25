import { TestBed } from '@angular/core/testing';

import { FiestaService } from './fiesta.service';

describe('FiestaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FiestaService = TestBed.get(FiestaService);
    expect(service).toBeTruthy();
  });
});
