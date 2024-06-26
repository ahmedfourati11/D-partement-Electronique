import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProfileAncienService } from '../profile-ancien.service';
import { Router,ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ancien-diplomes',
  standalone: true,
  imports: [CommonModule,CommonModule,FormsModule,RouterLink],
  templateUrl: './ancien-diplomes.component.html',
  styleUrl: './ancien-diplomes.component.css'
})
export class AncienDiplomesComponent {

  searchTerm: string = '';

  anc_dip:any[]=[
    {nom_prenom:'Ahmed Fourati',ann_obt_dip:'2025',soc_trav_act:'DEPARTEMENT',poste_occupee:'Génie logiciel',add_mail:'ahmed.fourati@enetcom.u-sfax.tn',linkedin:'https://www.linkedin.com/in/ahmed-fourati-a4488a252/',description:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut veniam, vitae consequuntur recusandae quia sapiente deserunt quis atque a quo quibusdam repellat placeat quisquam incidunt possimus molestias harum earum similique.Quas, doloribus? Eius corporis, et corrupti atque qui sapiente quas provident, necessitatibus dolores delectus aperiam placeat. Voluptatibus, odit excepturi nam pariatur obcaecati dolorem corrupti reiciendis similique, soluta autem assumenda beatae."]},

    {nom_prenom:'Ahmed Fourati',ann_obt_dip:'2025',soc_trav_act:'XXXXX',poste_occupee:'Génie logiciel',add_mail:'ahmed.fourati@enetcom.u-sfax.tn',linkedin:'https://www.linkedin.com/in/ahmed-fourati-a4488a252/',description:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut veniam, vitae consequuntur recusandae quia sapiente deserunt quis atque a quo quibusdam repellat placeat quisquam incidunt possimus molestias harum earum similique.Quas, doloribus? Eius corporis, et corrupti atque qui sapiente quas provident, necessitatibus dolores delectus aperiam placeat. Voluptatibus, odit excepturi nam pariatur obcaecati dolorem corrupti reiciendis similique, soluta autem assumenda beatae."]},

    {nom_prenom:'Samir Ben Salem',ann_obt_dip:'2025',soc_trav_act:'XXXXX',poste_occupee:'Génie logiciel',add_mail:'ahmed.fourati@enetcom.u-sfax.tn',linkedin:'https://www.linkedin.com/in/ahmed-fourati-a4488a252/',description:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut veniam, vitae consequuntur recusandae quia sapiente deserunt quis atque a quo quibusdam repellat placeat quisquam incidunt possimus molestias harum earum similique.Quas, doloribus? Eius corporis, et corrupti atque qui sapiente quas provident, necessitatibus dolores delectus aperiam placeat. Voluptatibus, odit excepturi nam pariatur obcaecati dolorem corrupti reiciendis similique, soluta autem assumenda beatae."]},
    
    {nom_prenom:'Nadia Chaker',ann_obt_dip:'2025',soc_trav_act:'XXXXX',poste_occupee:'Génie logiciel',add_mail:'ahmed.fourati@enetcom.u-sfax.tn',linkedin:'https://www.linkedin.com/in/ahmed-fourati-a4488a252/',description:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut veniam, vitae consequuntur recusandae quia sapiente deserunt quis atque a quo quibusdam repellat placeat quisquam incidunt possimus molestias harum earum similique.Quas, doloribus? Eius corporis, et corrupti atque qui sapiente quas provident, necessitatibus dolores delectus aperiam placeat. Voluptatibus, odit excepturi nam pariatur obcaecati dolorem corrupti reiciendis similique, soluta autem assumenda beatae."]},

    {nom_prenom:'Ahmed Fourati',ann_obt_dip:'2025',soc_trav_act:'XXXXX',poste_occupee:'Génie logiciel',add_mail:'ahmed.fourati@enetcom.u-sfax.tn',linkedin:'https://www.linkedin.com/in/ahmed-fourati-a4488a252/',description:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut veniam, vitae consequuntur recusandae quia sapiente deserunt quis atque a quo quibusdam repellat placeat quisquam incidunt possimus molestias harum earum similique.Quas, doloribus? Eius corporis, et corrupti atque qui sapiente quas provident, necessitatibus dolores delectus aperiam placeat. Voluptatibus, odit excepturi nam pariatur obcaecati dolorem corrupti reiciendis similique, soluta autem assumenda beatae."]},
  ];

  anc_dipOriginaux: any[] = [
  ];

  ngOnInit() {
    this.anc_dipOriginaux = [...this.anc_dip];}

    constructor(private router: Router, private service: ProfileAncienService) {}

    goToProfile(nom_prenom: string) {
      this.router.navigate(['/Profile-ancien-diplome', nom_prenom]);
    }

    clearSearch() {
      this.searchTerm = ''; 
      this.anc_dip = [...this.anc_dipOriginaux];
    }

    onSearch() {
      if (this.searchTerm.trim() === '') {
        console.log("Aucun terme de recherche, réinitialisation de la liste des enseignants.");
        // Réinitialise la liste des enseignants à la liste originale
        this.anc_dip = [...this.anc_dipOriginaux];
      } else {
        const searchLower = this.searchTerm.toLowerCase();
        // Filtre la liste des enseignants en fonction du terme de recherche
        this.anc_dip = this.anc_dipOriginaux.filter(anc_dip =>
          anc_dip.nom_prenom.toLowerCase().includes(searchLower)
        );
      }
    }


}
