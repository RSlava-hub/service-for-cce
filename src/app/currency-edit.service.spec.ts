import { TestBed } from '@angular/core/testing';

import { CurrencyEditService } from './currency-edit.service';

describe('CurrencyEditService', () => {
  let service: CurrencyEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
