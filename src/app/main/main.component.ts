import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    function getPosition(element: any) {
      var xPosition = 0;
      var yPosition = 0;

      while(element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
      }

      return yPosition;
    }
    const sectionHome = document.getElementById('home');
    const sectionAbout = document.getElementById('about');
    const sectionSkills = document.getElementById('parcours');
    const sectionContact = document.getElementById('contact');
    const menuHome = document.getElementById('menu-home');
    const menuAbout = document.getElementById('menu-about');
    const menuSkills = document.getElementById('menu-skills');
    const menuContact = document.getElementById('menu-contact');
    const positionAbout = getPosition(sectionAbout);
    const positionSkills = getPosition(sectionSkills);
    const positionContact = getPosition(sectionContact);
    window.addEventListener("scroll", () => {
      if (sectionHome && menuHome && sectionAbout && menuAbout && sectionSkills && menuSkills && sectionContact && menuContact) {
        var windowScroll = window.scrollY + 200;
        if (windowScroll > 0 && windowScroll <= positionAbout){
          menuHome.classList.add('active');
        }else {
          menuHome.classList.remove('active');
        }
        if (windowScroll >= positionAbout && windowScroll <= positionSkills){
          menuAbout.classList.add('active');
        }else {
          menuAbout.classList.remove('active');
        }
        if (windowScroll >= positionSkills && windowScroll <= positionContact){
          menuSkills.classList.add('active');
        }else {
          menuSkills.classList.remove('active');
        }
        if (windowScroll >= positionContact){
          menuContact.classList.add('active');
        }else{
          menuContact.classList.remove('active');
        }
      }
    });
  }

}
