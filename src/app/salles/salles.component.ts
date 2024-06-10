import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink,Router } from '@angular/router';
import { ProfileSalleService } from '../profile-salle.service';

@Component({
  selector: 'app-salles',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './salles.component.html',
  styleUrl: './salles.component.css'
})
export class SallesComponent {

  salles: any[] = [
    { noms: 'Laboratoire des TPs en Electronique numérique',abreviation:'EL-Log', materiel:[ "* Valise Simulateur numérique TLB-3100","* Simulateur numérique ETS-5000","* Banc didactique délectronique numérique"], quantite: ["8","8","8"],rqetlog:[" .",". ","A.O.I 2/2020"] ,description: ["Nos gammes des produits couvrent les domaines d’activité suivants :" ,"* Electronique numérique" , "* Module des circuits Timer" , "* Module des circuits mémoires" , "* Module Logique combinatoire" , "* Module Logique fondamentale" , "* Module Logique séquentiel" , "* Module ADC/DAC"]},
  
    { noms: 'Laboratoire des TPs en Traitement de signal',abreviation:'EL-TS', materiel:[ "* PC Micro lux (Pentium Dual Core 2.5GHZ)"], quantite: ["8"],rqetlog:["Matlab 6.5","Matlab 2010","ADS 2009"] ,description: []},
  
    { noms: 'Laboratoire des TPs en Transfert Thermique et Physique',abreviation:'EL-PHY', materiel:[ "* Charge et Décharge d’un Condensateur","* Mesure d’un champ électrique","* Mesure d’un champ magnétique- Bobines d’Helmholtz","* Focométrie : L'étude des lois des lentilles et des instruments optiques","* L'étude de la dispersion et du pouvoir de résolution des (prismes et réseaux)","* Lot Induction magnétique","* Lot de p et n germanium effet Hall","* Ensemble complet pour l’étude de la polarisation de la lumière"], quantite: ["01","01","02","02","01","01","01","01"],rqetlog:[] ,description: []},
  
    { noms: 'Laboratoire des TPs en mécatronique, SoC et les TPs en IOT (be, Wifi et LORA)',abreviation:'EL-SOC 1', materiel:[ "* Nios II Embedded Evaluation Kit, Cyclone III Edition","* Carte FPGA SPARTRAN-3","* Carte FPGA xilinx Nexys 4","* Valise Carte FPGA Altera","* Système d'acquisition et de contrôle Temps réels CRiO","* PC DELL avec licence Labview","* Kit de développement LoraWan","* Kit de développement IoT pour Raspberry","* Système de test général RFID"], quantite: ["07","06","09","08","01","08","08","08","04"],rqetlog:[" .",". "," .",". "," .",". ","A.O.I 2/2020","A.O.I 2/2020","A.O 9/2022"] ,description: ["Nos gammes des produits couvrent les domaines d’activité suivants :" ,"- Systèmes électroniques :" , "* Implantation Numérique: FPGA..." , "* Systèmes Embarqués Temps Réel avec FPGA" , "- Systèmes Mécatroniques :" , "* TPs en IOT (wifi et Lora)"]},
  
    { noms: 'Laboratoire des TPs en Electronique médicale et transmission sans fils',abreviation:'EL-SOC 2', materiel:[ "* Carte Elvis II","* Carte Biomédicale+capteurs Iworx HK-ELVIS","* Oscilloscope 1GHz Tektronix","* Oscilloscope numérique couleur 70 MHz GDS-1072A-U","* Emetteur Récepteur USRP Ni","* Kit complet MySignals SW BLE (SoftWare) - E Health","* Carte Bitalino Biomédicale","* PC DELL avec licence Labview","* Système d’Acquisition de Données et Mesure Biomédicales KL-730","* Carte Mbed NXP LPC 1768","* Banc didactique LORA","* Maison AIOT"], quantite: ["09","06","01","01","03","01","02","08","01","06","01","01"],rqetlog:[" .",". "," .",". "," .",". ",".","A.O.I 2/2020",".",".","A.O.I 2/2020","A.O 9/2022"] ,description: ["Nos gammes des produits couvrent les domaines d’activité suivants :" ,"* la mesure d'électrocardiogramme ECG" , "* la mesure d'électromyogramme EMG" , "* la mesure d'électrooculogramme EOG" , "* la mesure d'électroencéphalogramme EEG" , "* la mesure de la pression artérielle","* la mesure de photopléthysmogramme","* la détection de la ventilation respiratoire","* la mesure du pouls","* la détection de l'impédance corporelle","* la vitesse de respiration Mètre","* E-santé IOT"]},
  
    { noms: 'Laboratoire des TPs en Electronique analogique ',abreviation:'EL-Elec 1', materiel:[ "* Module d'étude des conversions Numériques Analogiques","* Module d'étude des conversions Analogiques Numériques","* G.B.F","* G.B.F 20MHz","* Oscilloscope numérique","* Multimètre de table","* Alimentation de Laboratoire"], quantite: ["05","05","06","02","08","08","08"],rqetlog:[".",".","GX 305","GX 320","OX 6062b-CSD","MX 5060","AX 503"] ,description: ["Nos gammes des produits couvrent les domaines d’activité suivants :","* Systèmes électroniques analogiques : basé par le montage des circuits et des composants électroniques sur une plaque d’essais.","* Systèmes conversions A/N et N/A"]},
  
    { noms: 'Laboratoire des TPs en Electronique analogique et en transmission RF ',abreviation:'EL-Elec 2', materiel:[ "* G.B.F 20 MHz","* Alimentation Stabilisée","* Oscilloscope numérique couleur 70 MHz","* Multimètre de table","* Traceur des caractéristiques des transistors","* Analyseur de spectre GSP-830","* Emetteur RF GRF 3300S","* Récepteur RF GRF 3300S","* GBF 100MHz"], quantite: ["08","08","08","08","02","04","04","04","01"],rqetlog:["GX 320","AX 502","OX 6062","MX 553","HM 6042",".",".",".","."] ,description: ["Nos gammes des produits couvrent les domaines d’activité suivants :","- Systèmes de transmission RF :","* Caractéristiques spécifiques des circuits RF","* Applications d'émetteur et de récepteur RF","* Les applications et les mesures par l’analyseur de spectre","- Systèmes Electronique Analogique :","* Basé par le montage des circuits et des composants électroniques sur une plaque d’essais"]},
  
    { noms: 'Laboratoire des TPs en Domotique et réseaux des capteurs ',abreviation:'EL-DOM', materiel:[ "* Banc d’étude des systèmes de communication radio-mobile 3G-SIM908","* Système complet de type VDI","* Mini Porte électrique","* Système d’alarme Anti-vol","* Système d’alarme Incendie","* Maison automatisé","* Gestion de parking","* Portail Automatisé","* Maison intelligente","* Perceuse et gravure à commande numérique","* Kit Nœud de capteurs sans fil"], quantite: ["04","01","03","01","01","03","03","03","04","01","08"],rqetlog:[".",".","Langlois B3RES+",".",".",".",".",".",".",".","CIRQOID/Cirqoid"] ,description: ["Nos gammes des produits couvrent les domaines d’activité suivants :","* Systèmes Domotiques","* Systèmes d’alarmes","* Systèmes robotiques"]},
  
    { noms: 'Laboratoire des TPs en Electronique de puissance ',abreviation:'EL-CI', materiel:[ "* Redresseurs commandés et non commandés","* Hacheur et alimentation à découpage","* Banc didactique onduleur triphasé :","- 1x Convertisseur de fréquence 1KW ","- 1 x moteur Asynchrone 1KW avec encodeur"," - 1 x Onduleur SEMIKRON"], quantite: ["03","02","01",".",".","."],rqetlog:["LD","LD","LD",".",".","."] ,description: ["Nos gammes des produits couvrent les domaines d’activité suivants :","- Electronique de puissance :","* Redresseur monophasé et triphasé (commandé et non commandé)","* Hacheur (série et parallèle)","* Commande d’un moteur Asynchrone"]},
  
    { noms: 'Laboratoire des TPs en Domotique KNX, la conception et réalisation des objets en 3D ',abreviation:'EL-CI', materiel:[ "* Perceuse et gravure à commande numérique CNC","* Imprimante 3D + Scanner 3D","* Banc didactique en Domotique KNX"], quantite: ["01","01","01"],rqetlog:["CIRQOID/Cirqoid complete Package","A.O.I 2/2020","A.O.I 2/2020"] ,description: ["Nos gammes des produits couvrent les domaines d’activité suivants :","* Analyse et conception de l'objet technique ","* Modélisation du réel","* Impression 3D"]},
  
    { noms: 'Laboratoire des TPs en Automobile ',abreviation:'EL-CI', materiel:[ "* Kit didactique d’un Moteur à Essence","* Kit didactique d’un Moteur Diesel","* Appareil portable de diagnostic des véhicules","* Système automobile hybride","* Système de gestion de l’Energie d’un véhicule électrique","* Système d’acquisition et de contrôle Temps réels CRiO","* NI MyDAQ","* Maquette d’Allumage magnétique","* Système d’allumage statique","* Oscilloscope USB","* NI LabVIEW RIO Evaluation Kit"], quantite: ["01","01","01","01","01","02","10","01","02","02","02"],rqetlog:["G-110601","G-120301","Auto30SSS V3","DLQC-C002/DOLANG","AOI 2/2020","AO 2/2019 AOI 2/2020","AOI 2/2020","Elwee","Elwee","Analog Discovery 2","AO 2/2019"] ,description: ["Nos gammes des produits couvrent les domaines d’activité suivants :","- Systèmes Automobiles :","* Allumage magnétique et statique","* Diagnostic d'un moteur à essence","* Diagnostic d'un moteur à Diesel","* Etude et Diagnostic d'un système hybride","* Gestion de l’énergie d’un véhicule électrique"]},
  
    { noms: 'Laboratoire des TPs en Simulation Electronique ',abreviation:'EL-CAO 1', materiel:[ "* PC DELL","* Valise Raspberry"], quantite: ["08","08"],rqetlog:["ADS 2009 / Autocad 2004 "," Eagle 5.7.0 / Mplab/Matlab 2007 "," PsPice 8.0 / ModelSim 6.1FR "," Proteus 7.7 / Pic C ","Workbench / somplorer 7.0 "," Labview 2013 / visuel c++ "," Express 2008 / A.O 9:2022"] ,description: []},
  
    { noms: 'Laboratoire des TPs en Simulation Electronique ',abreviation:'EL-CAO 2', materiel:[ "* PC DELL (Intel Core i7 CPU @ 3.60GHz)"], quantite: ["08"],rqetlog:["ADS 2009 / Autocad 2004 "," Eagle 5.7.0 / Mplab/Matlab 2007 "," PsPice 8.0 / ModelSim 6.1FR "," Proteus 7.7 / Pic C ","Workbench / somplorer 7.0 "," Labview 2013 / visuel c++ "," Express 2008"] ,description: []}
  ];

  constructor(private router: Router, private service: ProfileSalleService) {}

  goToProfile(noms: string) {
    this.router.navigate(['/Profile-Salle',noms]);
  }

}
