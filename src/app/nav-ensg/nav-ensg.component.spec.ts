import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavEnsgComponent } from './nav-ensg.component';

describe('NavEnsgComponent', () => {
  let component: NavEnsgComponent;
  let fixture: ComponentFixture<NavEnsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavEnsgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavEnsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
