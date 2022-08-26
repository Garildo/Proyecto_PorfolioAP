import { TestBed } from '@angular/core/testing';

import { SExperienciaLaboralService } from './s-experiencia-laboral.service';

describe('SExperienciaLaboralService', () => {
  let service: SExperienciaLaboralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SExperienciaLaboralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
