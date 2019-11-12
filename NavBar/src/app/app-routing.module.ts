import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';

const routes: Routes = [
  { path:'Home', component: HomeNavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
