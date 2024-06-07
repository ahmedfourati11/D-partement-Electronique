import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProfileService } from '../profile.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-eneignant-permanent',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './profile-eneignant-permanent.component.html',
  styleUrl: './profile-eneignant-permanent.component.css'
})
export class ProfileEneignantPermanentComponent implements OnInit {

  nomPrenom: string = '';

  enseignant: any;

  constructor(private route: ActivatedRoute, private profileService: ProfileService) {
    this.route.params.subscribe(params => {
      this.nomPrenom = params['nomPrenom'];
      this.enseignant = this.profileService.getEnseignantByNomPrenom(this.nomPrenom);
    });
}

  ngOnInit(): void {}

}
