import { TestBed } from '@angular/core/testing';

import { ProfileAncienService } from './profile-ancien.service';

describe('ProfileAncienService', () => {
  let service: ProfileAncienService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileAncienService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
