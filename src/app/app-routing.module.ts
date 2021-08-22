import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { CustomersComponent } from './customers/customers.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './Login/login.component';
import { AuthorizationCheck } from './Services/authorizationCheck';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthorizationCheck] },
  { path: 'counter', component: CounterComponent, canActivate: [AuthorizationCheck] },
  { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthorizationCheck] },
  { path: 'customers', component: CustomersComponent, canActivate: [AuthorizationCheck] },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
