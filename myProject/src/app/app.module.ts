import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonProfilComponent } from './mon-profil/mon-profil.component';
import { FormationsComponent } from './formations/formations.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { LoisirsComponent } from './loisirs/loisirs.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LangagesComponent } from './langages/langages.component';
import { ReseauxComponent } from './reseaux/reseaux.component';

@NgModule({
  declarations: [
    AppComponent,
    MonProfilComponent,
    FormationsComponent,
    ExperiencesComponent,
    LoisirsComponent,
    LangagesComponent,
    ReseauxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
