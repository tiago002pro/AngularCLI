import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Base } from './base/base';
import { Sidebar } from './sidebar/sidebar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PersonFormComponent } from './modules/person-form/person-form.component';


@NgModule({
  declarations: [
    AppComponent,
    Base,
    Sidebar,
    PersonFormComponent,
    PersonFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent, PersonFormComponent]
})
export class AppModule { }
