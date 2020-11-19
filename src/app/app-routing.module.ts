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
import { UserCreateComponent } from './User/user-create/user-create.component';
import { UserLoginComponent } from './User/user-login/user-login.component';
import { VendorCreateComponent } from './Vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './Vendor/vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from './Vendor/vendor-detail/vendor-detail.component';
import { ProductDetailComponent } from './Product/product-detail/product-detail.component';
import { ProductEditComponent } from './Product/product-edit/product-edit.component';
import { ProductCreateComponent } from './Product/product-create/product-create.component';
import { RequestCreateComponent } from './Request/request-create/request-create.component';
import { RequestDetailComponent } from './Request/request-detail/request-detail.component';
import { RequestEditComponent } from './Request/request-edit/request-edit.component';
import { RequestLinesComponent } from './Request/request-lines/request-lines.component';
import { RequestReviewItemComponent } from './Request/request-review-item/request-review-item.component';


const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"home", component: HomeComponent},
  {path:"about", component: AboutComponent},
  {path:"e404", component: E404Component},
  //User Links
  {path:"users/list", component: UserlistComponent},
  {path:"users/detail/:id", component: UserDetailComponent},
  {path:"users/edit/:id", component: UserEditComponent},
  {path:"users/new", component: UserCreateComponent},
  {path:"login", component: UserLoginComponent},
  //Product Links
  {path:"products/list", component: ProductlistComponent},  
  {path:"products/detail/:id", component: ProductDetailComponent},
  {path:"products/edit/:id", component: ProductEditComponent},
  {path:"products/new", component: ProductCreateComponent},
  //Vendor Links
  {path:"vendors/list", component: VendorlistComponent},
  {path:"vendors/detail/:id", component: VendorDetailComponent},
  {path:"vendors/edit/:id", component: VendorEditComponent},
  {path:"vendors/new", component: VendorCreateComponent},
  //Request Line stuff
  {path:"requestlines/list", component: RequestlinelistComponent},
  //Requests Links
  {path:"requests/list", component: RequestlistComponent},
  {path:"requests/new", component: RequestCreateComponent},
  {path:"requests/detail/:id", component: RequestDetailComponent},
  {path:"requests/edit/:id", component: RequestEditComponent},
  {path:"requests/lines/:id", component: RequestLinesComponent},
  {path:"requests/review/:id", component: RequestReviewItemComponent},
  {path:"**", component: E404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
