import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-other-experiences',
  templateUrl: './other-experiences.component.html',
  styleUrls: ['./other-experiences.component.scss']
})
export class OtherExperiencesComponent implements OnInit {

  ru2: boolean = false;
  tnt: boolean = false;
  ru1: boolean = false;
  boulangerie: boolean = false;
  competences: Array<string> = [];
  content: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  public changeState(experience: any): void {
    switch (experience) {
      case 'ru2':
        if (this.ru2){
          this.ru2 = false;
        }else{
          this.ru2 = true;
          this.tnt = false;
          this.ru1 = false;
          this.boulangerie = false;
        }
        this.competences = ['Rigueur', 'Physique', 'Sociable', 'Réactivité', "Prise d'initiative"];
        this.content = "" +
          "J'ai eu l'occasion de travailler au sein d'une cantine " +
          "universitaire où j'occupais un rôle polyvalent, principalement " +
          "axé sur la gestion de la plonge. Mon travail englobait la " +
          "manipulation de la vaisselle sale et propre, le nettoyage des " +
          "bacs de cuisson ainsi que l'entretien général après le service. " +
          "Parallèlement, j'ai également participé à d'autres missions " +
          "variées telles que le service en salle et la mise en valeur " +
          "des présentoirs.";
        break;
      case 'tnt':
        if (this.tnt){
          this.tnt = false;
        }else{
          this.tnt = true;
          this.ru2 = false;
          this.ru1 = false;
          this.boulangerie = false;
        }
        this.competences = ["Collaboration", 'Adaptabilité', 'Physisque', 'Organisation', "Procédures de sécurités"];
        this.content =
          "En tant que manutentionnaire d'entrepôt chez TNT, une branche de FedEx, j'ai développé des compétences clés " +
          "dans la manipulation sûre de colis, l'utilisation de systèmes de suivi, le travail d'équipe et le respect " +
          "des procédures de sécurité. Mon rôle impliquait également le tri efficace des colis, leur chargement et " +
          "déchargement, ainsi que la flexibilité pour faire face aux changements rapides. Mon expérience chez TNT m'a " +
          "permis de prospérer dans un environnement logistique exigeant.";
        break;
      case 'ru1':
        if (this.ru1){
          this.ru1 = false;
        }else{
          this.ru1 = true;
          this.ru2 = false;
          this.tnt = false;
          this.boulangerie = false;
        }
        this.competences = ['Service', 'Plonge', 'Nettoyage', 'Adaptabilité', "Hygiène"];
        this.content =
          "En tant qu'employé polyvalent en restauration collective universitaire, " +
          "j'ai développé une expertise diversifiée. J'ai effectué des services à " +
          "l'assiette, géré le réapprovisionnement des entrées et desserts, géré la " +
          "plonge et assuré le nettoyage en fin de service. Cependant, en raison des " +
          "restrictions liées à la pandémie de COVID-19, le restaurant a été contraint " +
          "de fermer, entraînant la rupture de mon contrat."
        break;
      case 'boulangerie':
        if (this.boulangerie){
          this.boulangerie = false;
        }else{
          this.boulangerie = true;
          this.ru2 = false;
          this.tnt = false;
          this.ru1 = false;
        }
        this.competences = ["Rigueur", 'Commercial', 'Hygiène', 'Réactivité', "Vente"];
        this.content =
          "J'ai contribué de manière ponctuelle à un commerce familial, où j'ai " +
          "développé diverses compétences. J'ai participé à la préparation quotidienne, " +
          "aidé dans les ventes, confectionné des sandwichs, effectué des tâches de " +
          "manutention et veillé au nettoyage. Cette expérience m'a permis de développer " +
          "des compétences organisationnelles, de vente, de préparation alimentaire, de " +
          "manutention et de maintien de l'hygiène.";
        break;
    }
  }

}
