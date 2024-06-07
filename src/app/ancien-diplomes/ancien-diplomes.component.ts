import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ancien-diplomes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ancien-diplomes.component.html',
  styleUrl: './ancien-diplomes.component.css'
})
export class AncienDiplomesComponent {

  enseignants: any[] = [
     { nomPrenom: 'KALLEL Fathi', grade: 'Maitre de conférence', email: 'fathi.kallel@enetcom.usf.tn',linkedin:'https://www.linkedin.com/in/fathi-kallel-755265115/' ,description:["- Cours assurés :", "* Traitement du signal analogique et numérique"	, "* Architecture IOT" , "* Circuit électrique" , "* Théorie de l'information" ,"* Fonctions d'électronique numérique" , "- TP assurés :" , "* Atelier de traitement de signaux et images"	, "* Architecture & prog IOT"]},
  
    { nomPrenom: 'BEN SALEM Samir', grade: 'Maitre assistant', email: 'Samir.bensalem@enetcom.usf.tn',linkedin :'https://www.linkedin.com/in/samir-ben-salem-25524019/' ,description:["- Cours assurés :", "* Conception des systémes Electronique embarqué"	, "* Energy harvesting et smart Grid"	, "* Electronique analogique 2" , "* Instrumentation médicale" , "* Electronique modulaire" , "* CAO et outil de sim" ,"* Technologie de circuits intégrés analogiques" , "* Electronique de commutation" , "* Instrumentation et chaines de mesure" , "- TP assurés :", "* Conception des systémes Electronique embarqué" , "* Electronique modulaire"]},
  
    { nomPrenom: 'SHABOU Sonda', grade: 'Assistant', email: 'Sonda.Shabou@enetcom.usf.tn',linkedin:'',description:["- Cours assurés :" , "* Circuit électrique" , "* Electronique pour les télécommunications"	, "* Electronique Analogique" , "* Electronique Modulaire" , "- TP assurés :" ,"* Electronique pour les télécommunications","* Electronique Analogique","* Electronique Modulaire"]},
  
    { nomPrenom: 'SMAOUI Soulaimen', grade: 'Assistant', email: 'soulaimen.smaoui@enetcom.usf.tn',linkedin:'https://www.linkedin.com/in/soulaimen-smaoui-34a9a925/' ,description:["- Cours assurés :" , "* Objets connectés" , "* RFID"	, "* Programmation ARM" , "* POO C++" , "- TP assurés :" ,"* RFID","* Programmation ARM","* POO C++","* Architecture des ordinateurs","* SDR"]},
  
  ];

}
