import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAncienDiplomeComponent } from './profile-ancien-diplome.component';

describe('ProfileAncienDiplomeComponent', () => {
  let component: ProfileAncienDiplomeComponent;
  let fixture: ComponentFixture<ProfileAncienDiplomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileAncienDiplomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileAncienDiplomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
