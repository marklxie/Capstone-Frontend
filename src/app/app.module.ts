import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { MenuComponent } from './Menu/menu.component';
import { E404Component } from './core/Components/e404/e404.component';
import { HomeComponent } from './core/Components/home/home.component';
import { AboutComponent } from './core/Components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    E404Component,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
