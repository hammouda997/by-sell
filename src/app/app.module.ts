import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './front-office/navbar/navbar.component';
import { FooterComponent } from './front-office/footer/footer.component';
import { HomeComponent } from './front-office/comp/home/home.component';
import { ProductDetailComponent } from './front-office/comp/product-detail/product-detail.component';
import { ShopComponent } from './front-office/comp/shop/shop.component';
import { ShopDetailComponent } from './front-office/comp/shop-detail/shop-detail.component';
import { CartComponent } from './front-office/comp/cart/cart.component';
import { CheckoutComponent } from './front-office/comp/checkout/checkout.component';
import { AccountComponent } from './front-office/comp/account/account.component';
import { RegisterComponent } from './front-office/comp/register/register.component';
import { LoginComponent } from './front-office/comp/login/login.component';
import { ContactComponent } from './front-office/comp/contact/contact.component';
import { IndexComponent } from './front-office/comp/index/index.component';
import { NavbarBackComponent } from './back-office/navbar-back/navbar-back.component';
import { FooterBackComponent } from './back-office/footer-back/footer-back.component';
import { SidebarBackComponent } from './back-office/sidebar-back/sidebar-back.component';
import { DashboardComponent } from "./back-office/comp/dashboard/dashboard.component";
import { RouterModule, Routes } from '@angular/router';
import { ForumComponent } from './front-office/comp/forum/forum.component';
import { BlogComponent } from './front-office/comp/blog/blog.component';

import { AppelComponent } from './front-office/comp/appel/appel.component';
import { ReclamationComponent } from './front-office/comp/reclamation/reclamation.component';
import { CategoryComponent } from './front-office/comp/category/category.component';
  const appRoute: Routes = [
  {path:'Shop' , component : ShopComponent},
  {path:'register' , component : RegisterComponent},
  {path:'account' , component : AccountComponent},
  {path:'cart' , component : CartComponent},
  {path:'checkout' , component : CheckoutComponent},
  {path:'login' , component : LoginComponent},
  {path:'ShopDetail' , component : ShopDetailComponent},
  {path:'ProductDetails' , component : ProductDetailComponent},
  {path:'forum' , component : ForumComponent},
  {path:'blog' , component : BlogComponent},
  {path:'category' , component : CategoryComponent},
  {path:'appel' , component : AppelComponent},
  {path:'reclamation' , component : ReclamationComponent},


  ]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProductDetailComponent,
    ShopComponent,
    ShopDetailComponent,
    CartComponent,
    CheckoutComponent,
    AccountComponent,
    RegisterComponent,
    LoginComponent,
    ContactComponent,
    IndexComponent,
    NavbarBackComponent,
    FooterBackComponent,
    SidebarBackComponent,
    DashboardComponent,
    ShopComponent,
    ForumComponent,
    BlogComponent,
    AppelComponent,
    ReclamationComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
