import { TestBed } from '@angular/core/testing';

import { ProfileexService } from './profileex.service';

describe('ProfileexService', () => {
  let service: ProfileexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
