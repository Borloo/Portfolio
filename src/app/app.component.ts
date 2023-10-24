import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Borloo';

  constructor() {
  }

  ngOnInit(): void {
    const header = document.getElementById('header');
    window.addEventListener("scroll", () => {
      if (header != null){
        if (window.scrollY > 50) {
          header.classList.add('scroll');
        } else {
          header.classList.remove('scroll')
        }
      }
    });
  }
}
