import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileAncienService {

  anc_dip:any[]=[
    {nom_prenom:'Ahmed Fourati',ann_obt_dip:'2025',soc_trav_act:'DEPARTEMENT',poste_occupee:'Génie logiciel',add_mail:'ahmed.fourati@enetcom.u-sfax.tn',linkedin:'https://www.linkedin.com/in/ahmed-fourati-a4488a252/',description:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut veniam, vitae consequuntur recusandae quia sapiente deserunt quis atque a quo quibusdam repellat placeat quisquam incidunt possimus molestias harum earum similique.Quas, doloribus? Eius corporis, et corrupti atque qui sapiente quas provident, necessitatibus dolores delectus aperiam placeat. Voluptatibus, odit excepturi nam pariatur obcaecati dolorem corrupti reiciendis similique, soluta autem assumenda beatae."]},

    {nom_prenom:'Ahmed Fourati',ann_obt_dip:'2025',soc_trav_act:'XXXXX',poste_occupee:'Génie logiciel',add_mail:'ahmed.fourati@enetcom.u-sfax.tn',linkedin:'https://www.linkedin.com/in/ahmed-fourati-a4488a252/',description:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut veniam, vitae consequuntur recusandae quia sapiente deserunt quis atque a quo quibusdam repellat placeat quisquam incidunt possimus molestias harum earum similique.Quas, doloribus? Eius corporis, et corrupti atque qui sapiente quas provident, necessitatibus dolores delectus aperiam placeat. Voluptatibus, odit excepturi nam pariatur obcaecati dolorem corrupti reiciendis similique, soluta autem assumenda beatae."]},

    {nom_prenom:'Samir Ben Salem',ann_obt_dip:'2025',soc_trav_act:'XXXXX',poste_occupee:'Génie logiciel',add_mail:'ahmed.fourati@enetcom.u-sfax.tn',linkedin:'https://www.linkedin.com/in/ahmed-fourati-a4488a252/',description:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut veniam, vitae consequuntur recusandae quia sapiente deserunt quis atque a quo quibusdam repellat placeat quisquam incidunt possimus molestias harum earum similique.Quas, doloribus? Eius corporis, et corrupti atque qui sapiente quas provident, necessitatibus dolores delectus aperiam placeat. Voluptatibus, odit excepturi nam pariatur obcaecati dolorem corrupti reiciendis similique, soluta autem assumenda beatae."]},
    
    {nom_prenom:'Nadia Chaker',ann_obt_dip:'2025',soc_trav_act:'XXXXX',poste_occupee:'Génie logiciel',add_mail:'ahmed.fourati@enetcom.u-sfax.tn',linkedin:'https://www.linkedin.com/in/ahmed-fourati-a4488a252/',description:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut veniam, vitae consequuntur recusandae quia sapiente deserunt quis atque a quo quibusdam repellat placeat quisquam incidunt possimus molestias harum earum similique.Quas, doloribus? Eius corporis, et corrupti atque qui sapiente quas provident, necessitatibus dolores delectus aperiam placeat. Voluptatibus, odit excepturi nam pariatur obcaecati dolorem corrupti reiciendis similique, soluta autem assumenda beatae."]},

    {nom_prenom:'Ahmed Fourati',ann_obt_dip:'2025',soc_trav_act:'XXXXX',poste_occupee:'Génie logiciel',add_mail:'ahmed.fourati@enetcom.u-sfax.tn',linkedin:'https://www.linkedin.com/in/ahmed-fourati-a4488a252/',description:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut veniam, vitae consequuntur recusandae quia sapiente deserunt quis atque a quo quibusdam repellat placeat quisquam incidunt possimus molestias harum earum similique.Quas, doloribus? Eius corporis, et corrupti atque qui sapiente quas provident, necessitatibus dolores delectus aperiam placeat. Voluptatibus, odit excepturi nam pariatur obcaecati dolorem corrupti reiciendis similique, soluta autem assumenda beatae."]},
  ];

  constructor() { }

  getancienByNomPrenom(nom_prenom: string): any {
    return this.anc_dip.find(anc => anc.nom_prenom === nom_prenom);
  }
}
