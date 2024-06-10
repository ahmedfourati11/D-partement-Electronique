import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { AvisPartenairesComponent } from '../avis-partenaires/avis-partenaires.component';
import { NosPartenairesComponent } from '../nos-partenaires/nos-partenaires.component';
import { AccreditationComponent } from '../accreditation/accreditation.component';
import { NosFormationsComponent } from '../nos-formations/nos-formations.component';
import { RouterLink } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AvisPartenairesComponent,NosPartenairesComponent,AccreditationComponent,NosFormationsComponent,RouterLink,ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
