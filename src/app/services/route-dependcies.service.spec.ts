import { TestBed } from '@angular/core/testing';

import { RouteDependciesService } from './route-dependcies.service';

describe('RouteDependciesService', () => {
  let service: RouteDependciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteDependciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
