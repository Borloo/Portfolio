import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterOutlet} from "@angular/router";
import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/sections/home/home.component';
import { AboutComponent } from './main/sections/about/about.component';
import { SkillsComponent } from './main/sections/skills/skills.component';
import { ParcoursComponent } from './main/sections/parcours/parcours.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import { ContactComponent } from './main/sections/contact/contact.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FooterComponent } from './footer/footer/footer.component';
import { OtherExperiencesComponent } from './dialog/other-experiences/other-experiences.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ParcoursComponent,
    ContactComponent,
    FooterComponent,
    OtherExperiencesComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
