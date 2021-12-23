import { TestBed } from '@angular/core/testing';

import { ErrorQueryDtoService } from './error-query-dto.service';

describe('ErrorQueryDtoService', () => {
  let service: ErrorQueryDtoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorQueryDtoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
