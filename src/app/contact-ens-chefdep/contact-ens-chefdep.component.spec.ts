import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactEnsChefdepComponent } from './contact-ens-chefdep.component';

describe('ContactEnsChefdepComponent', () => {
  let component: ContactEnsChefdepComponent;
  let fixture: ComponentFixture<ContactEnsChefdepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactEnsChefdepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactEnsChefdepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
