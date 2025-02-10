import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'add', component: ProductFormComponent },
  { path: 'edit/:id', component: ProductEditComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
