import { TestBed } from '@angular/core/testing';

import { Maths.ServiceService } from './maths.service.service';

describe('Maths.ServiceService', () => {
  let service: Maths.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Maths.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
