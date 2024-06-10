import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSalleComponent } from './profile-salle.component';

describe('ProfileSalleComponent', () => {
  let component: ProfileSalleComponent;
  let fixture: ComponentFixture<ProfileSalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileSalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
