import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  front: boolean = true;

  constructor() {}

  ngOnInit() {
    this.openFront(true)
  }

  public openFront(init: boolean = false): void {

  }

}
