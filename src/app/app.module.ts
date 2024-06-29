import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.state';
import { PostsListComponent } from './posts-list/posts-list.component';
import { AuthComponent } from './auth/auth.component';
import { PayfeesComponent } from './payfees/payfees.component';
import { StudentadmissionComponent } from './studentadmission/studentadmission.component';
import { PaystudentfeesComponent } from './paystudentfees/paystudentfees.component';

const appRoutes: Routes = [
  {
    path: 'home'  ,
    component: HomeComponent
  },
  {
    path: 'addproduct'  ,
    component: AddproductsComponent
  },
  {
    path: 'post'  ,
    component: PostsListComponent
  },
  {
    path: 'payfees'  ,
    component: PayfeesComponent
  },
  {
    path: 'addmission'  ,
    component: StudentadmissionComponent
  },
  {
    path: 'Pay'  ,
    component: PaystudentfeesComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddproductsComponent,
    ProductsComponent,
    PostsListComponent,
    AuthComponent,
    PayfeesComponent,
    StudentadmissionComponent,
    PaystudentfeesComponent
  ],
  imports: [
    BrowserModule,FormsModule,StoreModule.forRoot(appReducer), RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
