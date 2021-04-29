import { TestBed } from '@angular/core/testing';

import { ServicecursoService } from './servicecurso.service';

describe('ServicecursoService', () => {
  let service: ServicecursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicecursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
