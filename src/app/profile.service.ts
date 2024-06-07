import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  enseignants: any[] = [
    { nomPrenom: 'MNIF Hassène', grade: 'Professeur', email: 'Hassene.Mnif@enetcom.usf.tn',linkedin :'https://www.linkedin.com/in/hassene-mnif-57786911a/',cours: ["Smart Grid & Energy Harvesting ", " Circuits et systèmes RF", " Gestion d'énergie pour les systèmes embarqués", " Electronique analogique 2", " Optoélectronique ", " Chaine d'acquisition", " Technologie de circuits intégrés analogiques", " Compatibilité Electromagnétique", " Instrumentation et chaines de mesure"]},
  
    { nomPrenom: 'GHARIANI Moez', grade: 'Professeur', email: 'Moez.Ghariani@enetcom.usf.tn',linkedin :'https://www.linkedin.com/in/moez-ghariani-055223113/',cours:[" Véhicules électriques Intelligente"	," Systemes embarqués automobiles", " Alimentation et GE pour SE", " Automotive systems and Autosar Architecture"	, " Véhicule électrique intelligente", " Convertisseur statique", " Electronique et multiplexage dans les systemes de Trans"	, " Systèmes embarqués  pour les syststémes Transport", " Convertisseur statique"," Electronique de puissance"]},
  
    { nomPrenom: 'FAKHFAKH Ahmed', grade: 'Professeur', email: 'Ahmed.Fakhfakh@enetcom.usf.tn',linkedin :'https://www.linkedin.com/in/ahmed-fakhfakh-3a6381277/',cours:[" Smart Grid & Energy Harvesting"	, " Technologie des Réseaux Sf pour IOT", " Réseaux de capteurs Intelligents", " Smart Grid P" ]},
  
    { nomPrenom: 'FAKHFAKH Mourad', grade: 'Professeur', email: 'Mourad.Fakhfakh@enetcom.usf.tn',linkedin :'https://www.linkedin.com/in/mouradfakhfakh/',cours:[" Graphes et métaheuristiques", " Synthèse des circuits RF", " Automatisation et optimisation de la conception des circuits analogiques", " Electronique générale"	, " Techniques d’optimisation"," Théorie des graphes", " Aide à la conception de circuits analogiques"]},
  
    { nomPrenom: 'FRIKHA Mondher', grade: 'Professeur', email: 'mondher.frikha@enetcom.usf.tn',linkedin :'https://www.linkedin.com/in/frikha-mondher-96523a19/',cours:[" Traitement de signal"," Traitement du signal analogique et numérique", " Traitement numérique des signaux", " Traitement des images et multimédia", " Vision par ordinateur"]},
  
    { nomPrenom: 'BEN ATITALLAH Ahmed', grade: 'Professeur', email: 'Ahmed.BenAtitallah@enetcom.usf.tn',linkedin :'https://www.linkedin.com/in/ahmed-ben-atitallah-3a92362b7/',cours:["a","b","c"]},
  
    { nomPrenom: 'Abdelkafi Zied', grade: 'Maitre de conférence', email: 'zied.abdelkefi@enetcom.usf.tn',linkedin:'https://www.linkedin.com/in/zied-abdelkafi-02245537/',cours:[" Instrumentation et Métrologie"," Mécanique"," Atelier mathématiques appliquées"," Thermodynamique "]},
  
    { nomPrenom: 'KALLEL Fathi', grade: 'Maitre de conférence', email: 'fathi.kallel@enetcom.usf.tn',linkedin:'https://www.linkedin.com/in/fathi-kallel-755265115/',cours:[" Traitement du signal analogique et numérique"	, " Architecture IOT", " Circuit électrique", " Théorie de l'information"," Fonctions d'électronique numérique" ],tp:[ " Atelier de traitement de signaux et images"	, " Architecture & prog IOT"]},
  
    { nomPrenom: 'BEN SALEM Samir', grade: 'Maitre assistant', email: 'Samir.bensalem@enetcom.usf.tn',linkedin :'https://www.linkedin.com/in/samir-ben-salem-25524019/',cours:[" Conception des systémes Electronique embarqué"	, " Energy harvesting et smart Grid"	, " Electronique analogique 2", " Instrumentation médicale", " Electronique modulaire", " CAO et outil de sim"," Technologie de circuits intégrés analogiques", " Electronique de commutation", " Instrumentation et chaines de mesure" ],tp:[" Conception des systémes Electronique embarqué", " Electronique modulaire"]},
  
    { nomPrenom: 'CHAKER Nadia', grade: 'Maitre assistant', email: 'nadia.chaker@enetcom.usf.tn',linkedin:'https://www.linkedin.com/in/nadia-chaker-1229b5179/',cours:[" Compatibilité Electromagnétique"	, " Electrotechnique 1", " Machine Electrique"," Connected Building", " CAO et réalisation électronique" ],tp:[" Electrotechnique 1"]},
  
    { nomPrenom: 'BEN AMOR Nidhal', grade: 'Maitre assistant', email: 'Nidhal.Benamor@enetcom.usf.tn',linkedin:'https://www.linkedin.com/in/nidhal-ben-amor-488a72252/',cours:[" Electronique Numérique"," Conversion des données pour la radio-numérique"," Systèmes logiques 1"," Systèmes logiques 2"," Fonction d'électronique numérique"," Technologie des circuits intégrés numériques"],tp:[" Systèmes logiques 1"," Systèmes logiques 2"]},
  
    {nomPrenom: 'BLAIECH Rabeb', grade: 'Maitre assistant', email: 'rabeb.blaiech@enetcom.usf.tn',linkedin :'https://www.linkedin.com/in/rabeb-blaiech-4589926a/',cours:[" Scrum et leadership", " Entrepeneuriat et Business plan"	, " Préparation à la certification Lean Six Sigma"]},
  
    { nomPrenom: 'BRADAI Nourchene', grade: 'Maitre assistant', email: 'nourchene.bradai@enetcom.usf.tn',linkedin:'https://www.linkedin.com/in/nourchene-bradai-431b83211/',cours:[" Architectures avancées des processeurs embarqués", " Processeurs embarqués"	, " Architecture des MicrocontElectronique de commutation"," POO C++"],tp:[" Processeurs embarqués"," POO C++"]},
  
    { nomPrenom: 'DAOUD DAMAK Houda', grade: 'Maitre assistant', email: 'Houda.Daoud@enetcom.usf.tn',linkedin:'https://www.linkedin.com/in/houda-daoud-bba9b3179/',cours:[" Electronique pour les télécommunications"	, " Electronique analogique"	, " Technologies des réseaux sans fil pour IoT", " Optoélectronique"," Electronique modulaire"," Technologie de circuits intégrés numériques", "- TP assurés :", " Technologies des réseaux sans fil pour IoT"]},
  
    { nomPrenom: 'ELSAFI Bassem', grade: 'Maitre assistant', email: 'Bassem.safi@enetcom.usf.tn',linkedin:'https://www.linkedin.com/in/bassem-safi-35908055/',cours:[ " Electrostatique et magnestostatique", " Electromagnetisme"	, " Thermodynamique", " Antennes et propagation"],tp:[" Electrostatique et magnetostatique"," Electromagnetisme"," Thermodynamique"]},
  
    { nomPrenom: 'Fahmi GHOZZI', grade: 'Maitre assistant', email: 'fahmi.ghozzi@gmail.com',linkedin:'',cours:[" Electronique numérique"	, " Systèmes embarqués communicants"	, " Systèmes logiques 1", " Systèmes logiques 2", " Architecture programmable avancée (FPGA)", " STR embarqué", " Architecture des circuits programmables"	, "- TP assurés :", " STR embarqué"	, " Architecture des circuits programmables"]},
  
    { nomPrenom: 'FAKHFAKH Nadim', grade: 'Maitre assistant', email: 'Nadim.Fakhfakh@enetcom.usf.tn',linkedin:'https://www.linkedin.com/in/nadim-fakhfakh-083a0447/',cours:[" Systemes et réseaux  énergitique (syscom)"	, " Mécanique des fluides"	, " Transfert thermique" ],tp:[ " Systemes et réseaux  énergitique (syscom)"	, " Transfert thermique"]},
  
    { nomPrenom: 'FEKI Salima', grade: 'Maitre assistant', email: 'Salima.Feki@enetcom.usf.tn',linkedin:'https://www.linkedin.com/in/salima-feki-74b91319/',cours:[ " VHDL", " Electronique numérique"	, " Fonctions d'électronique numérique", " Systèmes logiques 2"	, " Architecture des circuits programmables" ],tp:[," VHDL"]},
  
    { nomPrenom: 'FOURATI KALLEL Imen', grade: 'Maitre assistant', email: 'imen.fourati@enetcom.usf.tn',linkedin:'',cours:[ " Reconnaissances des formes et vision par ordinateur", " Traitement de signal"	, " Traitement numérique des signaux", " Traitement d'image et vidéo"	,"- TP assurés :"," Préparation à la certification NI"]},
  
    { nomPrenom: 'FRIKHA Soulef', grade: 'Maitre assistant', email: 'soulef.frikha@enetcom.usf.tn',linkedin:'https://www.linkedin.com/in/soulef-frikha-a26173168/',cours:[" Droit de travail et Sécurité sociale"	, " Séminaire droit de l'investissement NP"]},
  
    { nomPrenom: 'GARGOURI Amir', grade: 'Maitre assistant', email: 'Amir.Gargouri@enetcom.usf.tn',linkedin:'https://www.linkedin.com/in/amir-gargouri-3a70b7257/',cours:[ " Conception des SI", " IA et Machine Learning"	, " Modélisation et Simulation avec le langage System C"	, " LINUX Embarqué & ROS", " Architecture et Pro IOT"],tp:[ " Modélisation et Simulation avec le langage System C"]},
  
    { nomPrenom: 'GASSARA Bilel', grade: 'Maitre assistant', email: 'Bilel.gassara@enetcom.usf.tn',linkedin:'https://www.linkedin.com/in/bilel-gassara-aa724619/',cours:[" Réseaux de capteurs sans fil"	, " Communication analogique" ],tp:[ " Réseau de capteurs sans fil"	, " Préparation à la certification NI"]},
  
    { nomPrenom: 'HAJJI Messaoud', grade: 'Maitre assistant', email: 'messaoud.hajji@enetcom.usf.tn',linkedin:'https://www.linkedin.com/in/messaoud-hajji-b097585b/',cours:["- Cours assurés :","  Antennes et Propagation"," Electrostatique et magnestostatique"," Physique des SC et des composants"," Electromagnétisme"],tp:[" Thermodynamique"]},
  
    { nomPrenom: 'HENTATI Manel', grade: 'Maitre assistant', email: 'Manel.Hentati@enetcom.usf.tn',linkedin:'',cours:[ " Programmation des systèmes embarqués (STM32)"	, " Architecture des Systèmes Programmables"	, " Programmation STM32"	, " Algo C embarqué"	, " Architecture programmable avancée", "Architecture des microcontrôleurs", "Architecture des circuits programmables "	],tp:["Architecture programmable avancée", "Processeur embarquée "]},
  
    { nomPrenom: 'HENTATI Raida', grade: 'Maitre assistant', email: 'raida.hentati@enetcom.usf.tn',linkedin:'https://www.linkedin.com/in/raida-hentati-1ab1472a3/',cours:[ " Algorithmique et programmation C Embarqué"	, "Méthodes et outils de conception des systèmes embarqués"	, "Architecture des microcontrôleurs" ],tp:[ " Conception des systèmes Electroniques embarqués",  " Architecture  programmable avancée", " Méthodes et outils de conception des systèmes embarqués", " Architecture des circuits programmables", " CAO et réalisation électronique"] },
  
    { nomPrenom: 'JAMMOUSI Kais', grade: 'Maitre assistant', email: 'kais.jammoussi@enetcom.usf.tn',linkedin:'https://www.linkedin.com/in/kais-jamoussi-83a57533/',cours:[ " Diagnostique intelligent des Véhicules Modernes", " Bus et Réseaux Industriels", " Electronique analogique" ],tp:[ " Electronique et multiplexage dans les systemes de Trans", " Systèmes embarqués  pour les systémes de Transport", " Préparation à la certification NI", " Electronique analogique"]},
  
    { nomPrenom: 'KALLEL Mohamed', grade: 'Maitre assistant', email: 'mohamed.kallel@enetcom.usf.tn',linkedin:'',cours:["- Cours assurés :"," Electronique numérique"," Reconnaissances des formes et vision par ordinateur"," Vision par ordinateur"," Interaction homme machine"," Intelligence artificielle et Deep learning"," Traitement d'image et vidéo"],tp:[" Traitement d'image et vidéo"]},
  
    { nomPrenom: 'KSANTINI Nesrine', grade: 'Maitre assistant', email: 'Nisrine.Kossentini@enetcom.usf.tn',linkedin:'',cours:["- Cours assurés :"," VHDL"," Electronique générale"," Electronique modulaire"," Electronique analogique 1"," VHDL-AMS"],tp:[" VHDL"," VHDL AMS"]},
  
    { nomPrenom: 'LOUKIL Hassen', grade: 'Maitre assistant', email: 'Hassen.Loukil@enetcom.usf.tn',linkedin:'https://www.linkedin.com/in/loukil-hassen-7a71211b/',cours:["a","b","c"]},
  
    { nomPrenom: 'MASMOUDI Wafa', grade: 'Maitre assistant', email: 'wafa.masmoudi@enetcom.usf.tn',linkedin:'',cours:["- Cours assurés :", " Instrumentation et Métrologie", " Mécanique", " Electromagnétisme", " Thermodynamique"	],tp:[ " Instrumentation et Métrologie", " Mécanique", " Electromagnétisme"]},
  
    { nomPrenom: 'REKIK Neila', grade: 'Maitre assistant', email: 'Neila.Rekik@enetcom.usf.tn',linkedin:'https://www.linkedin.com/in/neila-rekik-22643766/',cours:["- Cours assurés :"," Fonctions analogiques"," Harvest energie"," Harvest energie & SG"," Electronique générale"," Electronique modulaire"," Electronique analogique 1"," VHDL-AMS"," Technologie des circuits intégrés analogiques"],tp:[" Harvest energie"," VHDL AMS"]},
  
    { nomPrenom: 'MARZOUK AYEDI Rim', grade: 'Maitre assistant', email: 'rim.Marzouk@enetcom.usf.tn',linkedin:'',cours:[" Fonctions d'électronique  analogique"	, " Electronique numérique"	, " Réseaux de capteurs sans fil", " Instrumentation et chaines de mesure", " POO C++", "- TP assurés :", " Réseau de capteurs sans fil"	, " UML"," POO C++"]},
  
    { nomPrenom: ' FAKHFAKH SAHNOUN Salwa', grade: 'Maitre assistant', email: 'saloua.sahnoun@enetcom.usf.tn',linkedin:'https://www.linkedin.com/in/salwa-sahnoun-32402551/',cours:["IoT et systèmes de communications"	, "Electronique numérique"	, " VHDL", " Communication analogique", " Electronique médicale", " Technologies des réseaux de capteurs sans fil"," Electronique de commutation"," VHDL-AMS"," Electronique analogique 1" ],tp:[ " VHDL"	, " VHDL AMS"]},		
  
    { nomPrenom: 'ZAAFRANE Habiba', grade: 'Maitre assistant', email: 'habiba.zaafrane@enetcom.usf.tn',linkedin:'https://www.linkedin.com/in/habibazaafrane/',cours:[ " Entrepeneuriat et Business Model", " Scrum et leadership"	, " Préparation à la certification Lean Six Sigma"]},
  
    { nomPrenom: 'BEN SAID Achwek', grade: 'Maitre assistant', email: 'achwek.bensaid@enetcom.usf.tn',linkedin:'',cours:[ " Electronique pour les télécommunications", " Communication analogique"	, " Electronique analogique"," Electronique de commutation"],tp:[ " MP PCB"	, " Communication analogique"," Electronique modulaire"," Conception des cartes électronique (Altium designer)"," Electronique de commutation"]},
  
    { nomPrenom: 'ALLOULOU Rahma', grade: 'Maitre assistant', email: 'rahma.aloulou@enetcom.usf.tn',linkedin:'https://www.linkedin.com/in/rahma-aloulou-84528919/',cours:[ " Electronique de communication d’objets connectés", " Techniques avancées de conception"	, " JAVA embarqué"],tp:[ " Harvest energie"	, " Instrumentation chaine de mesure"," Préparation à la certification N 1"," Préparation à la certification CLAD, NICORE 2"]},
  
    { nomPrenom: 'SHABOU Sonda', grade: 'Assistant', email: 'Sonda.Shabou@enetcom.usf.tn',linkedin:'',cours:[ " Circuit électrique", " Electronique pour les télécommunications"	, " Electronique Analogique", " Electronique Modulaire" ],tp:[" Electronique pour les télécommunications"," Electronique Analogique"," Electronique Modulaire"]},
  
    { nomPrenom: 'SMAOUI Soulaimen', grade: 'Assistant', email: 'soulaimen.smaoui@enetcom.usf.tn',linkedin:'https://www.linkedin.com/in/soulaimen-smaoui-34a9a925/',cours:[ " Objets connectés", " RFID"	, " Programmation ARM", " POO C++" ],tp:[" RFID"," Programmation ARM"," POO C++"," Architecture des ordinateurs"," SDR"]},
  
  ];


  getEnseignantByNomPrenom(nomPrenom: string): any {
    // Implémentez la logique pour récupérer l'enseignant correspondant à partir du nom et prénom fournis
    return this.enseignants.find(enseignant => enseignant.nomPrenom === nomPrenom);
  }

  constructor() {}
}
