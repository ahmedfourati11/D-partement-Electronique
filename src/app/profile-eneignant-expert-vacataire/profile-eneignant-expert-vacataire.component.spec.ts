import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEneignantExpertVacataireComponent } from './profile-eneignant-expert-vacataire.component';

describe('ProfileEneignantExpertVacataireComponent', () => {
  let component: ProfileEneignantExpertVacataireComponent;
  let fixture: ComponentFixture<ProfileEneignantExpertVacataireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileEneignantExpertVacataireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileEneignantExpertVacataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
