import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactChefComponent } from './contact-chef.component';

describe('ContactChefComponent', () => {
  let component: ContactChefComponent;
  let fixture: ComponentFixture<ContactChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactChefComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
