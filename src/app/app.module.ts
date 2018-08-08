import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule,routingcomponent } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroService } from './hero.service';
import { DashComponent } from './dash/dash.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    routingcomponent,
    DashComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
