import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperiencesComponent } from './experiences/experiences.component';
import { MonProfilComponent } from './mon-profil/mon-profil.component';
import { AppComponent } from './app.component';
import { FormationsComponent } from './formations/formations.component';
import { LoisirsComponent } from './loisirs/loisirs.component';
import { LangagesComponent } from './langages/langages.component';
import { ReseauxComponent } from './reseaux/reseaux.component';

const routes: Routes = [
  {path : 'home', component : AppComponent},
  {path : 'profil', component : MonProfilComponent},
  {path: 'experiences', component : ExperiencesComponent},
  {path: 'formation', component : FormationsComponent},
  {path: 'loisir', component : LoisirsComponent},
  {path: 'langage', component : LangagesComponent},
  {path: 'reseaux', component : ReseauxComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
