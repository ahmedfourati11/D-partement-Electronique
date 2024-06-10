import { Component,OnInit } from '@angular/core';
import { RouterLink,ActivatedRoute } from '@angular/router';
import { ProfileSalleService } from '../profile-salle.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-salle',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './profile-salle.component.html',
  styleUrl: './profile-salle.component.css'
})
export class ProfileSalleComponent {

  noms: string = '';

  salle: any;

  constructor(private route: ActivatedRoute, private profilesalle: ProfileSalleService ) {
    this.route.params.subscribe(params => {
      this.noms = params['noms'];
      this.salle = this.profilesalle.getSalleByNom(this.noms);
    });
}

}
