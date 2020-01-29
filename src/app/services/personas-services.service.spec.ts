import { TestBed } from '@angular/core/testing';

import { PersonasServicesService } from './personas-services.service';

describe('PersonasServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonasServicesService = TestBed.get(PersonasServicesService);
    expect(service).toBeTruthy();
  });
});
