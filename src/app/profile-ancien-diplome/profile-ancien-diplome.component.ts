import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ProfileAncienService } from '../profile-ancien.service';

@Component({
  selector: 'app-profile-ancien-diplome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-ancien-diplome.component.html',
  styleUrl: './profile-ancien-diplome.component.css'
})
export class ProfileAncienDiplomeComponent {

  nom_prenom: string = '';
  anc: any;

  
  constructor(private route: ActivatedRoute, private profileService: ProfileAncienService) {
    this.route.params.subscribe(params => {
      this.nom_prenom = params['nom_prenom'];
      this.anc = this.profileService.getancienByNomPrenom(this.nom_prenom);
    });
}

    ngOnInit(): void {}

}
