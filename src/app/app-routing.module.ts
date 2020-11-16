import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/Components/home/home.component';
import { AboutComponent } from './core/Components/about/about.component';
import { E404Component } from './core/Components/e404/e404.component';

const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"home", component: HomeComponent},
  {path:"about", component: AboutComponent},
  {path:"e404", component: E404Component},
  {path:"**", component:E404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
