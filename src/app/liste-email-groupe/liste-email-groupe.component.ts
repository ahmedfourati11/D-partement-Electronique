import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavEnsgComponent } from '../nav-ensg/nav-ensg.component';

@Component({
  selector: 'app-liste-email-groupe',
  standalone: true,
  imports: [CommonModule,FormsModule,NavEnsgComponent],
  templateUrl: './liste-email-groupe.component.html',
  styleUrl: './liste-email-groupe.component.css'
})
export class ListeEmailGroupeComponent {

  searchTerm: string = '';

  groupes:any[]=[
    {classe:'1 LTIC 1',email:'ahmedfourati@ieee.org'},
    {classe:'1 LTIC 2',email:'ahmedfourati@ieee.org'},
    {classe:'2 Telecom',email:'ahmedfourati@ieee.org'},
    {classe:'2 IOT',email:'ahmedfourati@ieee.org'},
    {classe:'3 Telecom',email:'ahmedfourati@ieee.org'},
    {classe:'3 IOT',email:'ahmedfourati@ieee.org'},
    {classe:'1 Mastére SE',email:'ahmedfourati@ieee.org'},
    {classe:'1 Mastére',email:'ahmedfourati@ieee.org'},
    {classe:'2 Mastére SE',email:'ahmedfourati@ieee.org'},
    {classe:'2 Mastére',email:'ahmedfourati@ieee.org'},
    {classe:'1 GEC 1',email:'ahmedfourati@ieee.org'},
    {classe:'1 GEC 2',email:'ahmedfourati@ieee.org'},
    {classe:'1 GEC 3',email:'ahmedfourati@ieee.org'},
    {classe:'2 GEC 1',email:'ahmedfourati@ieee.org'},
    {classe:'2 GEC 2',email:'1gec220222023@gmail.com'},
    {classe:'2 GEC 3',email:'ahmedfourati@ieee.org'},
    {classe:'3 GEC SE',email:'ahmedfourati@ieee.org'},
    {classe:'3 GEC SEI',email:'ahmedfourati@ieee.org'},
    {classe:'3 GEC SC',email:'ahmedfourati@ieee.org'}
  ];

  groupesOriginaux: any[] =[...this.groupes];

  clearSearch() {
    this.searchTerm = ''; 
    this.groupes = [...this.groupesOriginaux];
  }

  onSearch() {
    if (this.searchTerm.trim() === '') {
      console.log("Aucun terme de recherche, réinitialisation de la liste des groupes.");
      // Réinitialise la liste des groupes à la liste originale
      this.groupes = [...this.groupesOriginaux];
    } else {
      const searchLower = this.searchTerm.toLowerCase();
      // Filtre la liste des groupes en fonction du terme de recherche
      this.groupes = this.groupesOriginaux.filter(groupe =>
        groupe.classe.toLowerCase().includes(searchLower)
      );
    }
  }


}
