import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileSalleService {

  constructor() { }

  salles: any[] = [
    { noms: 'Laboratoire des TPs en Electronique numérique',abreviation:'EL-Log', materiel:[ "8 Valise Simulateur numérique TLB-3100","8 Simulateur numérique ETS-5000","8 Banc didactique délectronique numérique (A.O.I 2/2020)"],description: [" Electronique numérique" , " Module des circuits Timer" , " Module des circuits mémoires" , " Module Logique combinatoire" , " Module Logique fondamentale" , " Module Logique séquentiel" , " Module ADC/DAC"]},
  
    { noms: 'Laboratoire des TPs en Traitement de signal',abreviation:'EL-TS', materiel:[ "8 PC Micro lux (Pentium Dual Core 2.5GHZ)"], quantite: ["8"],rqetlog:[" Matlab 6.5","Matlab 2010","ADS 2009"] ,description: []},
  
    { noms: 'Laboratoire des TPs en Transfert Thermique et Physique',abreviation:'EL-PHY', materiel:[ "1 Charge et Décharge d’un Condensateur","1 Mesure d’un champ électrique","2 Mesure d’un champ magnétique- Bobines d’Helmholtz","2 Focométrie : L'étude des lois des lentilles et des instruments optiques","1 L'étude de la dispersion et du pouvoir de résolution des (prismes et réseaux)","1 Lot Induction magnétique","1 Lot de p et n germanium effet Hall","1 Ensemble complet pour l’étude de la polarisation de la lumière"],rqetlog:[] ,description: []},
  
    { noms: 'Laboratoire des TPs en mécatronique, SoC et les TPs en IOT (be, Wifi et LORA)',abreviation:'EL-SOC 1', materiel:[ "7 Nios II Embedded Evaluation Kit, Cyclone III Edition","6 Carte FPGA SPARTRAN-3","9 Carte FPGA xilinx Nexys 4","8 Valise Carte FPGA Altera","1 Système d'acquisition et de contrôle Temps réels CRiO","8 PC DELL avec licence Labview","8 Kit de développement LoraWan (A.O.I 2/2020)","8 Kit de développement IoT pour Raspberry (A.O.I 2/2020)","4 Système de test général RFID (A.O 9/2022)"],description: ["- Systèmes électroniques :" , " Implantation Numérique: FPGA..." , " Systèmes Embarqués Temps Réel avec FPGA" , "- Systèmes Mécatroniques :" , " TPs en IOT (wifi et Lora)"]},
  
    { noms: 'Laboratoire des TPs en Electronique médicale et transmission sans fils',abreviation:'EL-SOC 2', materiel:[ "9 Carte Elvis II","6 Carte Biomédicale+capteurs Iworx HK-ELVIS","1 Oscilloscope 1GHz Tektronix","1 Oscilloscope numérique couleur 70 MHz GDS-1072A-U","3 Emetteur Récepteur USRP Ni","1 Kit complet MySignals SW BLE (SoftWare) - E Health","2 Carte Bitalino Biomédicale","8 PC DELL avec licence Labview (A.O.I 2/2020)","1 Système d’Acquisition de Données et Mesure Biomédicales KL-730","6 Carte Mbed NXP LPC 1768","1 Banc didactique LORA (A.O.I 2/2020)","1 Maison AIOT (A.O 9/2022)"],description: [" La mesure d'électrocardiogramme ECG" , " La mesure d'électromyogramme EMG" , " La mesure d'électrooculogramme EOG" , " La mesure d'électroencéphalogramme EEG" , " La mesure de la pression artérielle"," La mesure de photopléthysmogramme"," La détection de la ventilation respiratoire"," La mesure du pouls"," La détection de l'impédance corporelle"," La vitesse de respiration Mètre"," E-santé IOT"]},
  
    { noms: 'Laboratoire des TPs en Electronique analogique ',abreviation:'EL-Elec 1', materiel:[ "5 Module d'étude des conversions Numériques Analogiques","5 Module d'étude des conversions Analogiques Numériques","6 G.B.F (GX 305)","2 G.B.F 20MHz (GX 320)","8 Oscilloscope numérique (OX 6062b-CSD)","8 Multimètre de table (MX 5060)","8 Alimentation de Laboratoire (AX 503)"],description: [" Systèmes électroniques analogiques : basé par le montage des circuits et des composants électroniques sur une plaque d’essais."," Systèmes conversions A/N et N/A"]},
  
    { noms: 'Laboratoire des TPs en Electronique analogique et en transmission RF ',abreviation:'EL-Elec 2', materiel:[ "8 G.B.F 20 MHz (GX 320)","8 Alimentation Stabilisée (AX 502)","8 Oscilloscope numérique couleur 70 MHz (OX 6062)","8 Multimètre de table (MX 553)","2 Traceur des caractéristiques des transistors (HM 6042)","4 Analyseur de spectre GSP-830","4 Emetteur RF GRF 3300S","4 Récepteur RF GRF 3300S","1 GBF 100MHz"],description: ["- Systèmes de transmission RF :"," Caractéristiques spécifiques des circuits RF"," Applications d'émetteur et de récepteur RF"," Les applications et les mesures par l’analyseur de spectre","- Systèmes Electronique Analogique :"," Basé par le montage des circuits et des composants électroniques sur une plaque d’essais"]},
  
    { noms: 'Laboratoire des TPs en Domotique et réseaux des capteurs ',abreviation:'EL-DOM', materiel:[ "4 Banc d’étude des systèmes de communication radio-mobile 3G-SIM908","1 Système complet de type VDI","3 Mini Porte électrique (Langlois B3RES+)","1 Système d’alarme Anti-vol","1 Système d’alarme Incendie","3 Maison automatisé","3 Gestion de parking","3 Portail Automatisé","4 Maison intelligente","1 Perceuse et gravure à commande numérique","8 Kit Nœud de capteurs sans fil (CIRQOID/Cirqoid)"],description: [" Systèmes Domotiques"," Systèmes d’alarmes"," Systèmes robotiques"]},
  
    { noms: 'Laboratoire des TPs en Electronique de puissance ',abreviation:'EL-CI', materiel:[ "3 Redresseurs commandés et non commandés (LD)","2 Hacheur et alimentation à découpage (LD)"," Banc didactique onduleur triphasé :","- 1x Convertisseur de fréquence 1KW (LD)","- 1 x moteur Asynchrone 1KW avec encodeur (LD)"," - 1 x Onduleur SEMIKRON (LD)"] ,description: ["- Electronique de puissance :"," Redresseur monophasé et triphasé (commandé et non commandé)"," Hacheur (série et parallèle)"," Commande d’un moteur Asynchrone"]},
  
    { noms: 'Laboratoire des TPs en Domotique KNX, La conception et réalisation des objets en 3D ',abreviation:'EL-CI', materiel:[ "1 Perceuse et gravure à commande numérique CNC (CIRQOID/Cirqoid complete Package)","1 Imprimante 3D + Scanner 3D (A.O.I 2/2020)","1 Banc didactique en Domotique KNX (A.O.I 2/2020)"] ,description: [" Analyse et conception de l'objet technique "," Modélisation du réel"," Impression 3D"]},
  
    { noms: 'Laboratoire des TPs en Automobile ',abreviation:'EL-CI', materiel:[ "1 Kit didactique d’un Moteur à Essence (G-110601)","1 Kit didactique d’un Moteur Diesel (G-120301)","1 Appareil portable de diagnostic des véhicules (Auto30SSS V3)","1 Système automobile hybride (DLQC-C002/DOLANG)","1 Système de gestion de l’Energie d’un véhicule électrique (AOI 2/2020)","2 Système d’acquisition et de contrôle Temps réels CRiO (AO 2/2019 AOI 2/2020)","1 NI MyDAQ (AOI 2/2020)","1 Maquette d’Allumage magnétique (Elwee)","2 Système d’allumage statique (Elwee)","2 Oscilloscope USB (Analog Discovery 2)","2 NI LabVIEW RIO Evaluation Kit (AO 2/2019)"],description: ["- Systèmes Automobiles :"," Allumage magnétique et statique"," Diagnostic d'un moteur à essence"," Diagnostic d'un moteur à Diesel"," Etude et Diagnostic d'un système hybride"," Gestion de l’énergie d’un véhicule électrique"]},
  
    { noms: 'Laboratoire des TPs en Simulation Electronique ',abreviation:'EL-CAO 1', materiel:[ "8 PC DELL","8 Valise Raspberry"],rqetlog:["ADS 2009, Autocad 2004, Eagle 5.7.0, Mplab/Matlab 2007, PsPice 8.0, ModelSim 6.1FR, Proteus 7.7, Pic C, Workbench, somplorer 7.0, Labview 2013, visuel c++, Express 2008, A.O 9:2022"] ,description: []},
  
    { noms: 'Laboratoire des TPs en Simulation Electronique ',abreviation:'EL-CAO 2', materiel:[ " PC DELL (Intel Core i7 CPU @ 3.60GHz)"], quantite: ["08"],rqetlog:["ADS 2009, Autocad 2004, Eagle 5.7.0, Mplab/Matlab 2007, PsPice 8.0, ModelSim 6.1FR, Proteus 7.7, Pic C, Workbench, somplorer 7.0, Labview 2013, visuel c++, Express 2008, A.O 9:2022"] ,description: []}
  ];


  getSalleByNom(noms: string): any {
    // Implémentez La logique pour récupérer l'enseignant correspondant à partir du nom et prénom fournis
    return this.salles.find(salle => salle.noms === noms);
  }

}
