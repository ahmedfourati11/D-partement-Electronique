import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AncienDiplomesComponent } from './ancien-diplomes.component';

describe('AncienDiplomesComponent', () => {
  let component: AncienDiplomesComponent;
  let fixture: ComponentFixture<AncienDiplomesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AncienDiplomesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AncienDiplomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
