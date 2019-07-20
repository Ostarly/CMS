import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenofoundComponent } from './pagenofound/pagenofound.component';

const routes: Routes = [
  { path: 'index', component: HomeComponent},
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
