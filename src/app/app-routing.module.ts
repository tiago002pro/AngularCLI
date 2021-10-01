import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Base } from './base/base';
import { PersonFormComponent } from './modules/person-form/person-form.component';

const routes: Routes = [
  { path: 'home', component: PersonFormComponent },
  { path: 'person', component: AppComponent },
  { path: 'base', component: Base },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
