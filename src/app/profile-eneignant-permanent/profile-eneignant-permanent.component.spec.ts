import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEneignantPermanentComponent } from './profile-eneignant-permanent.component';

describe('ProfileEneignantPermanentComponent', () => {
  let component: ProfileEneignantPermanentComponent;
  let fixture: ComponentFixture<ProfileEneignantPermanentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileEneignantPermanentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileEneignantPermanentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
