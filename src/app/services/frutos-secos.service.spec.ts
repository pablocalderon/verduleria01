import { TestBed } from '@angular/core/testing';

import { FrutosSecosService } from './frutos-secos.service';

describe('FrutosSecosService', () => {
  let service: FrutosSecosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrutosSecosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
