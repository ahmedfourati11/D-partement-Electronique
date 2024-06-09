import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisPartenairesComponent } from './avis-partenaires.component';

describe('AvisPartenairesComponent', () => {
  let component: AvisPartenairesComponent;
  let fixture: ComponentFixture<AvisPartenairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvisPartenairesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvisPartenairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
