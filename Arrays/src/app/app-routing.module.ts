import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { EditskuComponent } from './editsku/editsku.component';
//import { UpdateproductComponent } from './updateproduct/updateproduct.component';




const routes: Routes = [
  { path:'', component:HomeNavbarComponent},
  { path: 'sku', component: ProductListComponent },
  {path: 'edit/:id',component:EditskuComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
