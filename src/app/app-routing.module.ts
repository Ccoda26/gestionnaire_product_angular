import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './module/list-product/list-product.component';
import { UpdateProductComponent } from './module/update-product/update-product.component';
import { AddProductComponent } from './module/add-product/add-product.component';

const routes: Routes = [
  { path: '', component: ListProductComponent },
  { path: 'produit', component: ListProductComponent },
  { path: 'produit/ajouter', component: AddProductComponent }, 
  { path: 'produit/modifier/:id', component: UpdateProductComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
