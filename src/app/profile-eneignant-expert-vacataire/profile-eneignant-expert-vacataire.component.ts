import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProfileService } from '../profile.service';
import { CommonModule } from '@angular/common';
import { ProfileexService } from '../profileex.service';
@Component({
  selector: 'app-profile-eneignant-expert-vacataire',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-eneignant-expert-vacataire.component.html',
  styleUrl: './profile-eneignant-expert-vacataire.component.css'
})
export class ProfileEneignantExpertVacataireComponent {

  
  nomPrenom: string = '';

  enseignant: any;

  constructor(private route: ActivatedRoute, private profileService: ProfileexService) {
    this.route.params.subscribe(params => {
      this.nomPrenom = params['nomPrenom'];
      this.enseignant = this.profileService.getEnseignantByNomPrenom(this.nomPrenom);
    });
}


}
