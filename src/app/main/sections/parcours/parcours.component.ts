import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parcours',
  templateUrl: './parcours.component.html',
  styleUrls: ['./parcours.component.scss']
})
export class ParcoursComponent implements OnInit {

  school: boolean = false;
  btnSchool: any;
  btnWork: any;
  iconSchool: any;
  iconWork: any;
  card6tm: boolean = false;
  card6tm2: boolean = false;
  cardCap: boolean = false;

  modalTitle: string = '';
  projects: {} = {};

  constructor() { }

  ngOnInit(): void {
    this.btnSchool = document.getElementById('btn-school');
    this.iconSchool = document.getElementById('school-i');
    this.btnWork = document.getElementById('btn-work');
    this.iconWork = document.getElementById('work-i');
    // this.clickSchool(true);
  }

  public clickSchool(init: boolean = false): void {
    this.desactiveCards();
    if (!this.school || init){
      if (this.btnSchool && this.iconSchool && this.btnWork && this.iconWork){
        this.school = true;
        this.btnSchool.classList.add('active');
        this.iconSchool.classList.add('active');
        this.btnWork.classList.remove('active');
        this.iconWork.classList.remove('active');
      }
    }
  }

  public clickWork(card: string = ''): void {
    this.desactiveCards();
    if (this.school){
      if (this.btnSchool && this.iconSchool && this.btnWork && this.iconWork){
        this.school = false;
        this.btnSchool.classList.remove('active');
        this.iconSchool.classList.remove('active');
        this.btnWork.classList.add('active');
        this.iconWork.classList.add('active');
        if (card != ''){
          switch (card){
            case 'cap':
              this.cardCap = true;
              break;
            case '6tm':
              this.card6tm = true;
              break;
            case '6tm2':
              this.card6tm2 = true;
              break;
          }
        }
      }
    }
  }

  public clickProject(company: string): void{
    switch (company){
      case 'cap':
        this.modalTitle = 'Capgemini';
        break;
      case '6tm':
        this.modalTitle = '6TM';
        this.projects = {
          'blc': {
            title: 'BLC - Baudemer Automotive',
            poste: 'Développeur principal',
            image: '',
            url: 'https://www.blc-automotive.com/',
            description: 'rlkgjlezrgljn'
          },
          'aco': {
            title: "ACO - Automobile Club de l'Ouest",
            poste: 'Développeur complémentaire',
            image: '',
            url: 'https://www.lemans.org/',
            description: 'knkfdbjojaqrgjoml'
          },
          'lmem': {
            title: "LMEM - Le Mans Endurance Management",
            poste: 'Second développeur',
            image: '',
            url: 'https://www.fiawec.com/',
            description: 'ojazeljhljznezt'
          }
        }
        break;
    }
  }

  private desactiveCards(): void {
    this.cardCap = false;
    this.card6tm = false;
    this.card6tm2 = false;
  }

}
