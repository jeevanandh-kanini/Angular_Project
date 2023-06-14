import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CrudComponent } from './crud/crud.component';
import { CurrencyComponent } from './currency/currency.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'crud', component: CrudComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'currency', component: CurrencyComponent },
    { path: 'home', component: HomeComponent },

    { path: '', redirectTo: '/login', pathMatch: 'full' },
  ];


  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }