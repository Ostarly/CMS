import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenofoundComponent } from './pagenofound/pagenofound.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';

const routes: Routes = [
  { path: 'index', component: HomeComponent},
  { path: 'registration', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'display-post/:id', component: HomeComponent},
  { path: 'helpdesk', component: HelpdeskComponent},
  { path: '', redirectTo: 'index', pathMatch: 'full'},
  { path: '**', component: PagenofoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
