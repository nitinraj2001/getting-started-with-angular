import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './products/home/home.component';
import { ProductListComponent } from './products/product-list/product-list.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"products", component:ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
