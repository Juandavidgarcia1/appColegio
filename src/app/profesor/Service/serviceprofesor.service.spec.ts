import { TestBed } from '@angular/core/testing';

import { ServiceprofesorService } from './serviceprofesor.service';

describe('ServiceprofesorService', () => {
  let service: ServiceprofesorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceprofesorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
