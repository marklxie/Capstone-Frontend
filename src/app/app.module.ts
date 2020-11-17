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
import { UserlistComponent } from './User/userlist/userlist.component';
import { RequestlistComponent } from './Request/requestlist/requestlist.component';
import { ProductlistComponent } from './Product/productlist/productlist.component';
import { VendorlistComponent } from './Vendor/vendorlist/vendorlist.component';
import { RequestlinelistComponent } from './Requestline/requestlinelist/requestlinelist.component';
import { MenuItemsComponent } from './Menu/menu-items/menu-items.component';
import { UserDetailComponent } from './User/user-detail/user-detail.component';
import { UserEditComponent } from './User/user-edit/user-edit.component';
import { UserCreateComponent } from './User/user-create/user-create.component';
import { UserLoginComponent } from './User/user-login/user-login.component';
import { SearchPipe } from './core/pipes/search.pipe';
import { SortPipe } from './core/pipes/sort.pipe';
import { UserSearchPipe } from './User/user-search.pipe';
import { VendorCreateComponent } from './Vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './Vendor/vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from './Vendor/vendor-detail/vendor-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    E404Component,
    HomeComponent,
    AboutComponent,
    UserlistComponent,
    RequestlistComponent,
    ProductlistComponent,
    VendorlistComponent,
    RequestlinelistComponent,
    MenuItemsComponent,
    UserDetailComponent,
    UserEditComponent,
    UserCreateComponent,
    UserLoginComponent,
    SearchPipe,
    SortPipe,
    UserSearchPipe,
    VendorCreateComponent,
    VendorEditComponent,
    VendorDetailComponent
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
