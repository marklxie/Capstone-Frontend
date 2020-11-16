import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/Components/home/home.component';
import { AboutComponent } from './core/Components/about/about.component';
import { E404Component } from './core/Components/e404/e404.component';
import { UserlistComponent } from './User/userlist/userlist.component';
import { ProductlistComponent } from './Product/productlist/productlist.component';
import { VendorlistComponent } from './Vendor/vendorlist/vendorlist.component';
import { RequestlinelistComponent } from './Requestline/requestlinelist/requestlinelist.component';
import { RequestlistComponent } from './Request/requestlist/requestlist.component';
import { UserDetailComponent } from './User/user-detail/user-detail.component';
import { UserEditComponent } from './User/user-edit/user-edit.component';


const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"home", component: HomeComponent},
  {path:"about", component: AboutComponent},
  {path:"e404", component: E404Component},
  {path:"users/list", component: UserlistComponent},
  {path:"user/detail/:id", component:UserDetailComponent},
  {path:"user/edit/:id", component:UserEditComponent},
  {path:"products/list", component: ProductlistComponent},
  {path:"vendors/list", component:VendorlistComponent},
  {path:"requestline/list", component:RequestlinelistComponent},
  {path:"request/list", component:RequestlistComponent},
  {path:"**", component: E404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
