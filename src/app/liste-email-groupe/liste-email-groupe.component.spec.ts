import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEmailGroupeComponent } from './liste-email-groupe.component';

describe('ListeEmailGroupeComponent', () => {
  let component: ListeEmailGroupeComponent;
  let fixture: ComponentFixture<ListeEmailGroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeEmailGroupeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeEmailGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
