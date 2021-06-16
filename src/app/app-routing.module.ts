import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './products/about/about.component';
import { HomeComponent } from './products/home/home.component';
import { ProductListComponent } from './products/product-list/product-list.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"products", component:ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
