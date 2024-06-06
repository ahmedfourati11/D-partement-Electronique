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

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"Enseignants",component:EnseignantsComponent},
    {path:"Anciens-diplomes",component:AncienDiplomesComponent},
    {path:"contact-chef-departement",component:ContactChefComponent},
    {path:"Formations",component:FormationsComponent},
    {path:"Salles",component:SallesComponent},
    {path:"Mobilités",component:MobiliteComponent},
    {path:"Actualités",component:ActualitesComponent},
    {path:"Sign-in",component:SignInComponent},
];
