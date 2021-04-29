import { TestBed } from '@angular/core/testing';

import { ServicecolegioService } from './servicecolegio.service';

describe('ServicecolegioService', () => {
  let service: ServicecolegioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicecolegioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
