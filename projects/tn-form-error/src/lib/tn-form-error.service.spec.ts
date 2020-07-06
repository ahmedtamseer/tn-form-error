import { TestBed } from '@angular/core/testing';

import { TnFormErrorService } from './tn-form-error.service';

describe('TnFormErrorService', () => {
  let service: TnFormErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TnFormErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
