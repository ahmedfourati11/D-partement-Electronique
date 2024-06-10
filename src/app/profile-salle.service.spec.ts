import { TestBed } from '@angular/core/testing';

import { ProfileSalleService } from './profile-salle.service';

describe('ProfileSalleService', () => {
  let service: ProfileSalleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileSalleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
