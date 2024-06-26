import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { EnseignantsComponent } from './enseignants/enseignants.component';
import { AncienDiplomesComponent } from './ancien-diplomes/ancien-diplomes.component';
import { ContactChefComponent } from './contact-chef/contact-chef.component';
import { FormationsComponent } from './formations/formations.component';
import { SallesComponent } from './salles/salles.component';
import { MobiliteComponent } from './mobilite/mobilite.component';
import { ActualitesComponent } from './actualites/actualites.component';
import { ContactEnsChefdepComponent } from './contact-ens-chefdep/contact-ens-chefdep.component';
import { EnsgExpertVacataireComponent } from './ensg-expert-vacataire/ensg-expert-vacataire.component';
import { ProfileEneignantPermanentComponent } from './profile-eneignant-permanent/profile-eneignant-permanent.component';
import { ProfileEneignantExpertVacataireComponent } from './profile-eneignant-expert-vacataire/profile-eneignant-expert-vacataire.component';
import { ListeEmailGroupeComponent } from './liste-email-groupe/liste-email-groupe.component';
import { AvisPartenairesComponent } from './avis-partenaires/avis-partenaires.component';
import { NosFormationsComponent } from './nos-formations/nos-formations.component';
import { AccreditationComponent } from './accreditation/accreditation.component';
import { NosPartenairesComponent } from './nos-partenaires/nos-partenaires.component';
import { ProfileSalleComponent } from './profile-salle/profile-salle.component';
import { ProfileAncienDiplomeComponent } from './profile-ancien-diplome/profile-ancien-diplome.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"Nos-Formations",component:NosFormationsComponent},
    {path:"Accreditation",component:AccreditationComponent},
    {path:"Nos-Partenaires",component:NosPartenairesComponent},
    {path:"Avis-De-Nos-Partenaires",component:AvisPartenairesComponent},
    {path:"Enseignants-Permanents",component:EnseignantsComponent},
    {path:"profile-enseignant-permanent/:nomPrenom", component:ProfileEneignantPermanentComponent},
    {path:"Enseignants-Expert-Vacataire",component:EnsgExpertVacataireComponent},
    {path:"Profile-Expert-Vacataire/:nomPrenom", component:ProfileEneignantExpertVacataireComponent},
    {path:"Anciens-diplomes",component:AncienDiplomesComponent},
    {path:"Profile-ancien-diplome/:nom_prenom",component:ProfileAncienDiplomeComponent},
    {path:"contact-chef-departement",component:ContactChefComponent},
    {path:"Formations",component:FormationsComponent},
    {path:"Salles",component:SallesComponent},
    {path:"Profile-Salle/:noms", component:ProfileSalleComponent},
    {path:"Mobilités",component:MobiliteComponent},
    {path:"Actualités",component:ActualitesComponent},
    {path:"Sign-in",component:SignInComponent},
    {path:"Liste-Des-Email-Groupe",component:ListeEmailGroupeComponent},
    {path:"Contact-Chef-Dep",component:ContactEnsChefdepComponent},
];
